import { useRef } from "react";
import MyInputComponent from "./MyInputComponent";

const UserForm = () => {
  let userNameRef = useRef();
  let passwordRef = useRef();
  let saveData = () => {
    console.log(userNameRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <>
      <section className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-11 col-lg-4  card p-3">
            <MyInputComponent ref={userNameRef} name="User Name" type="text" />
            <MyInputComponent
              ref={passwordRef}
              name="Password"
              type="password"
            />
            <button className="btn btn-primary" onClick={saveData}>
              Save
            </button>

            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserForm;
