import { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { getAllUsersWithPhotos } from '../services/employeeService';
import './EmployeeDirectory.css';

const EmployeeDirectory = () => {
  const { instance, accounts } = useMsal();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);

      // Request access token
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
        scopes: ['User.Read.All'] // Need this scope to read all users
      });

      // Fetch employees with photos
      const employeesData = await getAllUsersWithPhotos(response.accessToken);
      setEmployees(employeesData);
    } catch (err) {
      console.error('Error fetching employees:', err);
      setError('Failed to load employees. Please try again.');

      // If token acquisition fails, try interactive login
      if (err.name === 'InteractionRequiredAuthError') {
        try {
          await instance.acquireTokenPopup({
            ...loginRequest,
            scopes: ['User.Read.All']
          });
          // Retry fetching employees
          fetchEmployees();
        } catch (popupError) {
          console.error('Popup error:', popupError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading employees...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={fetchEmployees} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="employee-directory">
      <header className="directory-header">
        <h1>Employee Directory</h1>
        <p className="employee-count">{employees.length} employees</p>
      </header>

      <div className="employee-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <div className="employee-photo">
              {employee.photoUrl ? (
                <img src={employee.photoUrl} alt={employee.displayName} />
              ) : (
                <div className="photo-placeholder">
                  <span className="initials">{getInitials(employee.displayName)}</span>
                </div>
              )}
            </div>
            <div className="employee-info">
              <h3 className="employee-name">{employee.displayName}</h3>
              {employee.jobTitle && (
                <p className="employee-title">{employee.jobTitle}</p>
              )}
              {employee.department && (
                <p className="employee-department">{employee.department}</p>
              )}
              {employee.mail && (
                <a href={`mailto:${employee.mail}`} className="employee-email">
                  {employee.mail}
                </a>
              )}
              {employee.officeLocation && (
                <p className="employee-location">{employee.officeLocation}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
