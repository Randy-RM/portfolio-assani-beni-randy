import { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, BasicInput, TextareaInput } from "../";
import { useModalStatusStore, useMailPerDayStore } from "../../store";

const ContactMeForm = (): JSX.Element => {
  const { t } = useTranslation();

  // Honey pot security on form
  const beingType = useRef<HTMLInputElement>(null);
  // "select" the needed state and action
  const mailPerDay = useMailPerDayStore((state) => state.mailPerDay);
  const numberOfMailSent = useMailPerDayStore(
    (state) => state.numberOfMailSent
  );
  // const mailSendingDate = useMailPerDayStore((state) => state.mailSendingDate);

  // "select" the needed actions
  const updateNumberOfMailSent = useMailPerDayStore(
    (state) => state.updateNumberOfMailSent
  );

  const updateModalStatus = useModalStatusStore(
    (state) => state.updateModalStatus
  );
  const updateModalMessage = useModalStatusStore(
    (state) => state.updateModalMessage
  );
  const resetModalStatusStore = useModalStatusStore(
    (state) => state.resetModalStatusStore
  );

  const schema: ZodType<ContactMeFormData> = z.object({
    contactName: z
      .string()
      .min(2, t(`homePage.sendMessageSection.inputName.errorMin`))
      .max(100, t(`homePage.sendMessageSection.inputName.errorMax`)),
    contactMail: z
      .string()
      .email(t(`homePage.sendMessageSection.inputEmail.emailError`)),
    contactMessage: z
      .string()
      .min(10, t(`homePage.sendMessageSection.inputMessage.errorMin`))
      .max(3000, t(`homePage.sendMessageSection.inputMessage.errorMax`)),
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
      updateModalStatus("progress");
      updateModalMessage(
        t(`homePage.sendMessageSection.emailMessageInProgress`)
      );

      if (numberOfMailSent < mailPerDay) {
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
          updateModalStatus("succes");
          updateModalMessage(
            t(`homePage.sendMessageSection.emailMessageInSucces`)
          );
          updateNumberOfMailSent(numberOfMailSent + 1);
          setTimeout(() => {
            resetModalStatusStore();
          }, 4000);
        } else {
          console.log("Erreur");
          console.log("text : ", emailSend.text);
          console.log("status : ", emailSend.status);
          updateModalStatus("error");
          updateModalMessage(
            t(`homePage.sendMessageSection.emailMessageInErreur`)
          );
          setTimeout(() => {
            resetModalStatusStore();
          }, 4000);
        }
      } else {
        updateModalStatus("warning");
        updateModalMessage(
          t(`homePage.sendMessageSection.emailMessageInWarning`)
        );
        setTimeout(() => {
          resetModalStatusStore();
        }, 4000);
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
              label={t(`homePage.sendMessageSection.inputName.label`)}
              placeholder={t(
                `homePage.sendMessageSection.inputName.placeholder`
              )}
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
              label={t(`homePage.sendMessageSection.inputEmail.label`)}
              placeholder={t(
                `homePage.sendMessageSection.inputEmail.placeholder`
              )}
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
              label={t(`homePage.sendMessageSection.inputMessage.label`)}
              placeholder={t(
                `homePage.sendMessageSection.inputMessage.placeholder`
              )}
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
              {t(`homePage.sendMessageSection.sendMessageBtn`)}
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
