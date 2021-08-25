import { User } from "@common/types/types";
import { Button, Typography } from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

interface RegisterProps {
    register: any;
    handleClose: () => void;
    handleMenuClose: () => void;
}

export const Register = ({register, handleClose, handleMenuClose} : RegisterProps) => {
    var initialValues: User = { id: '', name: ''};

    return (
        <div className="login">
            <Typography variant="h5" align="center">Register</Typography>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values: User, {resetForm}: FormikHelpers<User>) => {
                        register({id: uuidv4(), name: values.name})
                        resetForm();   
                        handleClose();
                        handleMenuClose();
                    }
                }   
            >
                <Form className="login_form">
                    <Field id="id" name="id" hidden />
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="Name" />
                        <ErrorMessage name="name" />
                    </div>
                    <Button 
                        type="submit" variant="contained" color="primary"
                    >
                        Register
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
