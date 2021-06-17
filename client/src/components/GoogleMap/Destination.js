import React, { useState } from "react";
import Map from "./Map";
import { useForm } from "react-hook-form";
import { GeoAlt } from 'react-bootstrap-icons';


const Destination = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const [formSubmit, setFormSubmit] = useState(false);

    const [locationName, setLocationName] = useState({})

    const { watch, formState: { errors }, register, handleSubmit } = useForm();
    const onSubmit = data => setLocationName(data);

    console.log(watch("start"))
    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 c
                    ol-sm-12">

                        {!formSubmit && <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <strong><GeoAlt color="salmon" size={20} />Start</strong>
                                <input className="w-100 rounded border-primary p-1 mb-3" placeholder="start from" {...register("start", { required: true })} />
                                {errors.start && <span className="text-danger">Start location name is required.</span>}

                                <strong><GeoAlt color="salmon" size={20} />Pick To :</strong>
                                <input className="w-100 rounded border-primary p-1 mb-3" placeholder="End" {...register('end', { required: true })} />
                                {errors.end && <span className="text-danger">Destination location name is required.</span>}

                                <input type="submit" value="search" onClick={() => setFormSubmit(!formSubmit)} />

                            </form>
                        </div>}
                        {formSubmit && <div style={{ border: "1px solid black", width: "300px" }}>
                            <h4 className="my-2"><GeoAlt color="salmon" size={30} />Pick from :{locationName.from}</h4>

                            <h4 className="my-2"><GeoAlt color="salmon" size={30} />Pick To :{locationName.to}</h4>

                        </div>}
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Map origin={origin} destination={destination} style={{ marginLeft: "100px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;