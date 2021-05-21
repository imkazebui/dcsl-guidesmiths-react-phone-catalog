import React, {useState} from "react";
import { createPhone } from "../services/phone.service";
import { useForm } from "react-hook-form";

const PhoneCreate = ({ addDevice }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setSubmit] = useState(false)
  const submit = async data => {
    setSubmit(true)
    try {
      data.imageFileName = process.env.REACT_APP_DEFAULT_IMAGE
      const res = await createPhone(data);
      addDevice(res.newDevice);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <h1>Add Device</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          ></input>
          {errors?.name?.type === "required" && <span className="error-msg">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Manufacturer:</label>
          <select
            className="form-select"
            {...register("manufacturer", { required: true })}
          >
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Oppo">Oppo</option>
            <option value="Huawei">Huawei</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            className="form-control"
            type="text"
            {...register("description", { required: true })}
          ></input>
          {errors.description && <span className="error-msg">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input
            className="form-control"
            type="text"
            {...register("color", { required: true })}
          ></input>
          {errors.color && <span className="error-msg">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control"
            type="number"
            {...register("price", { required: true, min: 1 })}
          ></input>
          {errors?.price?.type === "required" && <span className="error-msg">This field is required</span>}
          {errors?.price?.type === "min" && <span className="error-msg">This field must be positive</span>}
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            className="form-control"
            type="file"
            {...register("imageFileName", { required: true })}
          ></input>
          {errors.imageFileName && <span className="error-msg">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Screen:</label>
          <input
            className="form-control"
            type="text"
            {...register("screen", { required: true })}
          ></input>
          {errors.screen && <span className="error-msg">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Processor:</label>
          <input
            className="form-control"
            type="text"
            {...register("processor", { required: true })}
          ></input>
          {errors.processor && <span className="error-msg">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Ram:</label>
          <input
            className="form-control"
            type="number"
            {...register("ram", { required: true , min: 1})}
          ></input>
          {errors?.ram?.type === "required" && <span className="error-msg">This field is required</span>}
          {errors?.ram?.type === "min" && <span className="error-msg">This field must be positive</span>}
        </div>
      <button disabled={isSubmitting} className="button-add button-custom" type="submit">
        Submit
      </button>
      </form>
    </div>
  );
};

export default PhoneCreate;
