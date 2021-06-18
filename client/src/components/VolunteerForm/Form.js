import React from "react";
import { useForm } from "react-hook-form";
import { formData } from '../fashionData/formData.json';

const Form = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const { formValues, handleChange } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        isMale: false,
        isFemale: false,
        country: '',
        city: '',
        street: '',
        zipcode: '',
        skills: ''

    });


    return (

        <div className="p-3 justify-content-center text-white"
            style={{
                backgroundImage: "url(" + "https://i.pinimg.com/474x/e0/0f/5d/e00f5dd80ee3d49c1fa08cce135f5590.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',



            }}>
            <h6 h6 className="justify-content-center " > {formData.title}</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input class="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input class="form-control" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        {errors.lastName?.type === 'required' && "Last name is required"}
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>Email address</label>
                    <input class="form-control" {...register("email", { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                    {errors.email?.type === 'required' && "Email is required"}
                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" value="option1" />
                        <span class="form-check-label"> Male </span>
                    </label>
                    <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" value="option2" />
                        <span class="form-check-label"> Female</span>
                    </label>
                </div><br />
                <label style={{ fontWeight: "bold" }}>Address</label>

                <div class="form-row">

                    <div class="form-group col-md-6 w-50">
                        <label >Country</label>
                        <select id="inputState" class="form-control">
                            <option> Choose...</option>
                            <option>Uzbekistan</option>
                            <option>Russia</option>
                            <option selected="">United States</option>
                            <option>India</option>
                            <option>Afganistan</option>
                            <option>Denmark</option>

                        </select>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-4">
                            <label>Street</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label>City</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label>zip-code</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                </div>

                <label class="form-check-label" for="defaultCheck">
                    Skills
                </label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                        Certified Plumber
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                    <label class="form-check-label" for="defaultCheck2">
                        Carpentry Experience
                    </label>
                </div>
            </form>
            <div class="form-group">
                <input type="submit" onClick={() => console.log("Thanks for join")} value="Join" class="btn btn-primary btn-block" />
            </div>
            <small class="text-muted">By clicking the 'Join' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>

        </div >
    );
};

export default Form;