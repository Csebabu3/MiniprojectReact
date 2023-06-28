import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import '../App.css';

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "*Required";
  } else if (values.firstname.length > 8) {
    errors.firstname = "*must be 8 characters or less";
  }
  if (!values.lastname) {
    errors.lastname = "*Required";
  } else if (values.lastname.length > 8) {
    errors.lastname = "*must be 8 characters or less";
  }
  if (!values.Email) {
    errors.Email = "*Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email)) {
    errors.Email = "*Invalid email address";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length > 8) {
    errors.password = "*maximum 8 characters";
  } else if (values.password.length < 4) {
    errors.password = "*minimum 4 characters";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "*Required";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "*passwords must match";
  }
  return errors;
};

function Faculty() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6465bc0c9c09d77a62f2717c.mockapi.io/miniproject');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      id: '',
      firstname: '',
      lastname: '',
      Email: '',
      password: '',
      confirmpassword: '',
    },
    validate,
    onSubmit: values => {
      if (values.id) {
        updateData(values);
      } else {
        postData(values);
      }
    },
  });

  const postData = async (values) => {
    try {
      if (formik.isValid) {
        const response = await axios.post('https://6465bc0c9c09d77a62f2717c.mockapi.io/miniproject', {
          firstname: values.firstname,
          lastname: values.lastname,
          Email: values.Email,
          password: values.password,
          confirmpassword: values.confirmpassword,
        });
        console.log(response.data);
        formik.resetForm();
        fetchData(); // Fetch updated data after posting
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (values) => {
    try {
      if (formik.isValid) {
        const response = await axios.put(`https://6465bc0c9c09d77a62f2717c.mockapi.io/miniproject/${values.id}`, {
          firstname: values.firstname,
          lastname: values.lastname,
          Email: values.Email,
          password: values.password,
          confirmpassword: values.confirmpassword,
        });
        console.log(response.data);
        formik.resetForm();
        fetchData(); // Fetch updated data after updating
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`https://6465bc0c9c09d77a62f2717c.mockapi.io/miniproject/${id}`);
      console.log(response.data);
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const editData = (item) => {
    formik.setValues({
      id: item.id,
      firstname: item.firstname,
      lastname: item.lastname,
      Email: item.Email,
      password: item.password,
      confirmpassword: item.confirmpassword,
    });
  };

  return (
    <div className='main'>
      <div className='Signup-form'>
        <h2>Sign up here</h2>
        <form onSubmit={formik.handleSubmit}>
          <input type='hidden' id='id' value={formik.values.id} />
          <input
            type='text'
            placeholder='firstname'
            name='firstname'
            autoComplete='off'
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <span>{formik.errors.firstname}</span>
          )}
          <input
            type='text'
            placeholder='lastname'
            name='lastname'
            autoComplete='off'
            onChange={formik.handleChange}
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <span>{formik.errors.lastname}</span>
          )}
          <input
            type='text'
            placeholder='Email'
            name='Email'
            autoComplete='off'
            onChange={formik.handleChange}
            value={formik.values.Email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Email && formik.errors.Email && (
            <span>{formik.errors.Email}</span>
          )}
          <input
            type='password'
            placeholder='password'
            name='password'
            autoComplete='off'
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
          <input
            type='password'
            placeholder='confirm password'
            name='confirmpassword'
            autoComplete='off'
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword && (
            <span>{formik.errors.confirmpassword}</span>
          )}
          <Button type='submit' className='btn btn-primary mt-3'>Submit</Button>
        </form>
      </div>
      <Table celled className='table table-dark mt-5'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>Confirm Password</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.firstname}</Table.Cell>
              <Table.Cell>{item.lastname}</Table.Cell>
              <Table.Cell>{item.Email}</Table.Cell>
              <Table.Cell>{item.password}</Table.Cell>
              <Table.Cell>{item.confirmpassword}</Table.Cell>
              <Table.Cell>
                <Button className='btn1' onClick={() => editData(item)}>Edit</Button>
              </Table.Cell>
              <Table.Cell>
                <Button className='btn2' onClick={() => deleteData(item.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Faculty;
