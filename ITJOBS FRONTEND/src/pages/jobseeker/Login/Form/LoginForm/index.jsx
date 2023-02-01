import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from "~/components/form/InputField";

const LoginForm = ({className:cx,onSubmit}) => {
    const schema = yup.object({
        email: yup.string().required("Vui lòng nhập email"),
        password: yup.string().required("Vui lòng nhập mật khẩu"),
      })
    const form= useForm({
        defaultValues: {
            email: '',
            password:''
          },
        resolver: yupResolver(schema)
      });

  return (
    <form
    name="frmLogin"
    id={cx("frmLogin")}
    onSubmit={form.handleSubmit(onSubmit)}
    >
    <div className={cx("form-group","form-text")}>
    <InputField 
    form={form}
    name="email"
    label="Vui lòng nhập email"/>    
    </div>
    <div className={cx("form-group","form-text")}>
    
    <InputField 
    form={form}
    name="password" 
    label="Vui lòng nhập mật khẩu"
    type="password"

    />
   
    
    </div>
    <div className={cx("form-group","form-checkbox")}>
    <input type="checkbox" name="chkSave" defaultValue={1} id="chkSave" />
    <label htmlFor="chkSave">Tự động đăng nhập</label>
    </div>
    <div className={cx("form-group","form-submit")}>
   
    <button type="submit" id="submit_login" className={cx("btn-gradient")}>
    Đăng nhập
    </button>
    </div>
    </form>
  )
}

export default LoginForm