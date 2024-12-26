import { AlignLeft, AlignRight } from 'lucide-react';
import React from 'react';
import Button from '../components/layout/Button';

const Guidelines = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerWrapper}>
        
        <div style={styles.header}>
          Student Medical System - Faculty of Computing
        </div>
        
      </div>
      <img
          src="https://www.sab.ac.lk/computing/sites/default/files/foc-logo-icon_2.png"
          style={styles.logo}
          alt="Faculty Logo"
        />
      <div style={styles.maincontent}>
      <div style={styles.contentBox}>
        <h2 style={styles.heading}>Guidelines to Submit</h2>
        <p><strong>For Students</strong></p>
        <ul>
          <li>
            <strong>Eligibility:</strong> You may submit medical documentation for excused absences related to lectures, exams, or other academic activities.
          </li>
          <li>
            <strong>Submission Process:</strong>
            <ul>
              <li>Log in: Use your university credentials to log in to the medical submission system.</li>
              <li>Choose Medical Type: Select the type of medical submission:</li><br />
              <ul>
                <li><b>Exam Medical:</b> For exams you were unable to attend.</li>
                <li>Lecture Absence: For missed lectures.</li>
              </ul>
              <li>Fill Details: Provide necessary information like dates, subject codes, and a brief reason for absence.</li>
              <li>Upload Documents: Attach the scanned medical certificate and any supporting documents.</li>
              <li>Review and Submit: Verify your information before submission. Once submitted, you will not be able to edit.</li>
            </ul>
          </li>
          <li>
            <strong>Deadlines:</strong> Submit your documents within 3 days after your recovery or the last date of your absence.
          </li>
          <li>
            <strong>Confirmation:</strong> A confirmation email will be sent once your submission is reviewed. Keep a copy of the confirmation for your records.
          </li>
        </ul>
        <br />
        <p><strong><b>For Lecturers</b></strong></p>
        <ul>
          <li>
            <strong>Review Submissions:</strong> Log into the system to view students' submissions under the "Medical Submissions" section.
          </li>
          <li>
            <strong>Update Attendance:</strong> Once reviewed, adjust attendance records as per university guidelines.
          </li>
          <li>
            <strong>Report Issues:</strong> Contact the student if submissions lack necessary details or clarity.
          </li>
        </ul>
      
      </div>
        
        <button style={styles.button}>Further Details</button>
      </div>

      {/* Button Group */}
      <div style={styles.buttonGroup}>
        <button style={styles.examButton}>Exam Medical</button>
        <button style={styles.lectureButton}>Lecture Medical</button>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        copyrights
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
  },

  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#33AC6B',
    color: 'white',
    position: 'relative',
  },
  header: {
    flexGrow: 1,
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 50,
    marginLeft: '110px',
    marginTop:'20px',
  },
  contentBox: {
    //backgroundColor: '#fff',
    //width: '80%',
    //margin: '20px auto',
    //padding: '30px',
    //borderRadius: '8px',
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    //textAlign: 'left',
    //textAlign:'right'
  },
  maincontent:{
    backgroundColor: '#fff',
    width: '80%',
    margin: '20px auto',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    alignItems:'left'
  },
  heading: {
    color: '#33AC6B',
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 'bold',
},
  buttonGroup: {
    display: 'flex',
    //justifyContent: 'center',
    margin: '20px 0',
    marginLeft:'800px',

  },
  examButton: {
    backgroundColor: '#33AC6B',
    color: '#fff',
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  lectureButton: {
    backgroundColor: '#D9D9D9',
    color: '#fff',
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#33AC6B',
    color: '#fff',
    padding: '10px',
    fontSize: '14px',
  },
 
  button:{
    backgroundColor: '#D9D9D9',
    color: '#fff',
    padding: '10px 10px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    AlignRight:'1000px',
    position:'absolute',

  }
};

export default Guidelines;
