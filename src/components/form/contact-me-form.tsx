import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, BasicInput, TextareaInput } from "..";
import { useEmailStatusStore } from "../../store";

const ContactMeForm = (): JSX.Element => {
  // Honey pot security on form
  const beingType = useRef<HTMLInputElement>(null);
  // "select" the needed actions
  const updateEmailStatus = useEmailStatusStore(
    (state) => state.updateEmailStatus
  );
  const updateEmailStatusMessage = useEmailStatusStore(
    (state) => state.updateEmailStatusMessage
  );
  const resetEmailStatusMessage = useEmailStatusStore((state) => state.reset);

  const schema: ZodType<ContactMeFormData> = z.object({
    contactName: z.string().min(2).max(50),
    contactMail: z.string().email(),
    contactMessage: z.string().min(10),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactMeFormData>({
    resolver: zodResolver(schema),
  });

  const sendEmail = async (data: ContactMeFormData) => {
    const serviceId = process.env.SERVICE_ID || "";
    const templateId = process.env.TEMPLATE_ID || "";
    const publicKey = process.env.PUBLIC_KEY || "";
    const { contactName, contactMail, contactMessage } = data;
    const beingTypeValue = beingType.current?.value;

    if (contactName && contactMail && !beingTypeValue) {
      updateEmailStatus("progress");
      updateEmailStatusMessage("Sending mail in progress.");

      const emailSend = await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: "Randy Assani Beni",
          from_name: `${contactName}`,
          contact_email: `${contactMail}`,
          message: `${contactMessage}`,
        },
        publicKey
      );
      if (emailSend.status == 200) {
        console.log("Succes");
        console.log("text : ", emailSend.text);
        console.log("status : ", emailSend.status);
        updateEmailStatus("succes");
        updateEmailStatusMessage("Your message has been sent successfully.");
        setTimeout(() => {
          resetEmailStatusMessage();
        }, 3000);
      } else {
        console.log("Erreur");
        console.log("text : ", emailSend.text);
        console.log("status : ", emailSend.status);
        updateEmailStatus("error");
        updateEmailStatusMessage(
          "An error has occurred while sending your message. Please try again later."
        );
        setTimeout(() => {
          resetEmailStatusMessage();
        }, 3000);
      }
      reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendEmail)}>
        <Container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <div className="width-50">
            <BasicInput
              id="contactName"
              name="contactName"
              label="YOUR NAME"
              placeholder="Enter your name"
              type="text"
              registerToForm={register}
              inputStatus={
                errors.contactName && errors.contactName.message
                  ? { status: "error", message: errors.contactName.message }
                  : undefined
              }
            />
          </div>
          <div className="width-50">
            <BasicInput
              id="contactMail"
              name="contactMail"
              label="YOUR EMAIL"
              placeholder="Enter your email address"
              type="email"
              registerToForm={register}
              inputStatus={
                errors.contactMail && errors.contactMail.message
                  ? { status: "error", message: errors.contactMail.message }
                  : undefined
              }
            />
          </div>
        </Container>
        <Container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <div className="width-100">
            <TextareaInput
              id="contactMessage"
              name="contactMessage"
              label="YOUR MESSAGE"
              placeholder="Enter your message"
              registerToForm={register}
              inputStatus={
                errors.contactMessage && errors.contactMessage.message
                  ? { status: "error", message: errors.contactMessage.message }
                  : undefined
              }
            />
          </div>
        </Container>
        <Container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <div className="width-100">
            <button className="btn btn-primary btn-size-larg">
              SEND YOUR MESSAGE
            </button>
          </div>
        </Container>
        <input
          ref={beingType}
          type="hidden"
          id="beingType"
          name="beingType"
          value=""
        />
      </form>
    </div>
  );
};

export default ContactMeForm;
