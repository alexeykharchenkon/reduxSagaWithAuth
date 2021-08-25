import { User } from "@common/types/types";
import { Button, Typography } from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

interface LoginProps {
    login: any;
    handleClose: () => void;
    handleMenuClose: () => void;
}

export const Login = ({login, handleClose, handleMenuClose} : LoginProps) => {
    var initialValues: User = { id: '', name: ''};

    return (
        <div className="login">
            <Typography variant="h5" align="center">Login</Typography>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values: User, {resetForm}: FormikHelpers<User>) => {
                        login({id: values.id, name: values.name})
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
                        Login
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
