import './Contact.css';
import { useForm } from "react-hook-form";
import {backendApi} from "../../../api.ts";
import type {ContactData} from "../../../model/ContactData.ts";

type ContactProps = {
    data?: Partial<ContactData>; // Make data optional and partial
}

type Contact = ContactData & { id?: number };

export function Contact({ data = {} }: ContactProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Contact>({
        defaultValues: { ...data, id: data?.id } // Safely spread data and handle id
    });

    const onSubmit = async (formData: Contact) => {
        try {
            // Generate id only if not provided
            formData.id = formData.id ?? Date.now();

            const response = await backendApi.post('/contact/save', formData);
            console.log('ContactData saved:', response.data);
            alert('Message sent successfully!');
            reset();
        } catch (error) {
            console.error('Error saving contact:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 characters'
                            }
                        })}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                    <label>Phone (optional): </label>
                    <input
                        type="tel"
                        {...register('phone', {
                            pattern: {
                                value: /^\+?[\d\s-]{0,15}$/,
                                message: 'Invalid phone number'
                            }
                        })}
                    />
                    {errors.phone && <span className="error">{errors.phone.message}</span>}
                </div>
                <div className="form-group">
                    <label>Subject: </label>
                    <input
                        type="text"
                        {...register('subject', {
                            required: 'Subject is required',
                            pattern: {
                                value: /^.{10,30}$/,
                                message: 'Subject must be between 10 and 30 characters'
                            }
                        })}
                    />
                    {errors.subject && <span className="error">{errors.subject.message}</span>}
                </div>
                <div className="form-group">
                    <label>Message: </label>
                    <textarea
                        rows={5}
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters'
                            }
                        })}
                    />
                    {errors.message && <span className="error">{errors.message.message}</span>}
                </div>
                <button type="submit" className="submit-btn">Send</button>
            </form>
        </div>
    );
}