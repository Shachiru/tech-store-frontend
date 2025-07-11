import './Contact.css';
import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";
import type { ContactData } from "../../../model/ContactData.ts";

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
        <div className="tech-contact-container">
            <div className="tech-contact-header">
                <h2>Contact Our Tech Support</h2>
                <p>Have questions about our products or services? We're here to help!</p>
            </div>

            <form className="tech-contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="tech-form-group">
                    <div className="tech-input-wrapper">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="tech-input"
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Name must be at least 2 characters'
                                }
                            })}
                        />
                    </div>
                    {errors.name && <span className="tech-error">{errors.name.message}</span>}
                </div>

                <div className="tech-form-group">
                    <div className="tech-input-wrapper">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="tech-input"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                    </div>
                    {errors.email && <span className="tech-error">{errors.email.message}</span>}
                </div>

                <div className="tech-form-group">
                    <div className="tech-input-wrapper">
                        <input
                            type="tel"
                            placeholder="Phone Number (Optional)"
                            className="tech-input"
                            {...register('phone', {
                                pattern: {
                                    value: /^\+?[\d\s-]{0,15}$/,
                                    message: 'Invalid phone number'
                                }
                            })}
                        />
                    </div>
                    {errors.phone && <span className="tech-error">{errors.phone.message}</span>}
                </div>

                <div className="tech-form-group">
                    <div className="tech-input-wrapper">
                        <input
                            type="text"
                            placeholder="Subject"
                            className="tech-input"
                            {...register('subject', {
                                required: 'Subject is required',
                                pattern: {
                                    value: /^.{10,30}$/,
                                    message: 'Subject must be between 10 and 30 characters'
                                }
                            })}
                        />
                    </div>
                    {errors.subject && <span className="tech-error">{errors.subject.message}</span>}
                </div>

                <div className="tech-form-group">
                    <div className="tech-input-wrapper">
                        <textarea
                            rows={5}
                            placeholder="How can we help you?"
                            className="tech-textarea"
                            {...register('message', {
                                required: 'Message is required',
                                minLength: {
                                    value: 10,
                                    message: 'Message must be at least 10 characters'
                                }
                            })}
                        />
                    </div>
                    {errors.message && <span className="tech-error">{errors.message.message}</span>}
                </div>

                <button type="submit" className="tech-submit-btn">
                    Send Message
                </button>
            </form>

            <div className="tech-contact-info">
                <div className="tech-info-item">
                    <strong>Support Hours:</strong> Monday-Friday, 9AM-6PM
                </div>
                <div className="tech-info-item">
                    <strong>Phone:</strong> 1-800-TECH-SUPPORT
                </div>
                <div className="tech-info-item">
                    <strong>Email:</strong> support@techstore.com
                </div>
            </div>
        </div>
    );
}