import './Contact.css';
import {useForm} from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = (data: FormData)=> {
        console.log('Form data submitted:', data);
        alert(`Submitted your message: ${data.subject}`);
    }
    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit )}>
                <div className="form-group">
                    <label>Email : </label>
                    <input type="email"
                           {...register('email', {
                               required: 'Email is required',
                               pattern: {
                                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                   message: 'Invalid email address'
                               }
                           })
                           }
                    />
                    {errors.email ?
                        <span className="error">{errors.email.message}</span>
                        : ''}
                </div>
                <div className="form-group">
                    <label>Subject : </label>
                    <input type="text"
                           {...register('subject', {
                                   required: 'Subject is required',
                                   pattern: {
                                       value: /^.{10,30}$/,
                                       message: 'Subject must be between 10 and 30 characters'
                                   }
                               }
                           )}
                    />
                    {errors.subject ?
                        <span className="error">{errors.subject.message}</span>
                        : ''}
                </div>
                <div className="form-group">
                    <label>Message : </label>
                    <textarea rows={5}
                              {...register(
                                  'message', {
                                      required: 'Message is required',
                                  }
                              )}
                    />
                    {errors.message ?
                        <span className="error">{errors.message.message}</span>
                        : ''}
                </div>
                <button type="submit" className="submit-btn">Send</button>
            </form>
        </div>
    );
}