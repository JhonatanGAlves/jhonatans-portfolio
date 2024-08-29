import { ChangeEvent, useContext, useEffect, useState } from "react";

import {
  Button,
  Flex,
  Heading,
  Link,
  Spinner,
  Text,
  TextArea,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import { FaPaperPlane } from "react-icons/fa";
import validator from "validator";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useI18n } from "../../../hooks/useI18n";
import { socialMedia } from "../../../constants/background";
import { PortfolioContext } from "../../../context/PortfolioContext";

type FormDataTypes = {
  email: string;
  subject: string;
  message: string;
};

interface ContactProps {
  modeDevice: "DESKTOP" | "MOBILE";
}

export const Contact = ({ modeDevice }: ContactProps) => {
  const [formData, setFormData] = useState<FormDataTypes>({
    email: "",
    subject: "",
    message: "",
  });
  const [isFieldValid, setIsFieldValid] = useState(false);
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const { i18n } = useI18n();
  const { theme } = useContext(PortfolioContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validateRequiredFields(formData);
    if (!isValid) return;

    setIsSendingMessage(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success(i18n("Email sent successfully!"));
      })
      .catch(() => {
        toast.error(i18n("An error occurred while sending the email."));
      })
      .finally(() => setIsSendingMessage(false));

    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  }

  function validateRequiredFields(formData: FormDataTypes) {
    let isValid = true;

    const isValidEmail = formData.email && validator.isEmail(formData.email);
    if (!isValidEmail) {
      toast.error(i18n("Please provide a valid e-mail."));
      isValid = false;
    }

    if (formData.subject && formData.subject.length < 3) {
      toast.error(i18n("Subject must have at least 3 characters."));
      isValid = false;
    }

    if (formData.message && formData.message.length < 6) {
      toast.error(i18n("Message must have at least 6 characters."));
      isValid = false;
    }

    return isValid;
  }

  function validateFields(formData: FormDataTypes) {
    let isValid = true;

    if (!formData.email || !formData.subject || !formData.message) {
      isValid = false;
    }

    setIsFieldValid(isValid);
  }

  useEffect(() => {
    validateFields(formData);
  }, [formData]);

  return (
    <Flex
      id="contact"
      direction="column"
      align="center"
      gap="7"
      className="py-16 border-t border-solid border-[var(--gray-800)] dark:border-[var(--dark-gray-800)]"
    >
      <Flex direction="column" align="center" gap="8px">
        <Heading
          as="h1"
          align="center"
          size="8"
          className="text-[var(--detail)] dark:text-[var(--dark-detail)]"
        >
          {i18n("Contact Me")}
        </Heading>
        <Text as="span" className="max-w-[34.375rem]" align="center">
          {i18n(
            "You can send me a message through my socials media or if you prefer, you can fill out the form below."
          )}
        </Text>
        <Flex justify="center" p="4" gap="8px">
          {socialMedia.map((media, index) => (
            <Tooltip key={index} content={media.mediaName}>
              <Link
                key={index}
                href={media.href}
                target="_blank"
                className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--detail)] hover:dark:text-[var(--dark-detail)] transition-all"
              >
                <media.icon size={30} />
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <ToastContainer
          position={modeDevice === "DESKTOP" ? "top-right" : "top-center"}
        />
        <form onSubmit={handleSubmit} className="w-full">
          <Flex direction="column" gap="3" p="4">
            <TextField.Root
              name="email"
              type="text"
              value={formData.email ?? ""}
              onChange={handleChange}
              placeholder={i18n("contact@example.com")}
              className="focus:border-cyan-400"
              color={theme === "dark" ? "yellow" : "purple"}
              disabled={isSendingMessage}
            />
            <TextField.Root
              name="subject"
              type="text"
              value={formData.subject ?? ""}
              onChange={handleChange}
              placeholder={i18n("Subject")}
              color={theme === "dark" ? "yellow" : "purple"}
              disabled={isSendingMessage}
            />
            <TextArea
              size="3"
              name="message"
              value={formData.message ?? ""}
              onChange={handleChange}
              placeholder={i18n("Write your message")}
              color={theme === "dark" ? "yellow" : "purple"}
              disabled={isSendingMessage}
            />
            <Button
              variant="surface"
              color={theme === "dark" ? "yellow" : "purple"}
              size="3"
              radius="medium"
              className={`w-full ${
                !isFieldValid || isSendingMessage
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              type="submit"
              disabled={!isFieldValid || isSendingMessage}
            >
              <Spinner loading={isSendingMessage}>
                <FaPaperPlane />
              </Spinner>{" "}
              {`${i18n("Submit")}`}
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
