/* eslint-disable react/prop-types */
import {
  GithubIcon,
  MailIcon,
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const initialForm = { name: "", email: "", message: "" };

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = t("contact.form.validation.required");
    }
    if (!form.email.trim()) {
      nextErrors.email = t("contact.form.validation.required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = t("contact.form.validation.invalidEmail");
    }
    if (!form.message.trim()) {
      nextErrors.message = t("contact.form.validation.required");
    } else if (form.message.trim().length < 10) {
      nextErrors.message = t("contact.form.validation.messageTooShort");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        variant: "destructive",
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.description"),
      });
      setForm(initialForm);
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">
          {t("contact.titlePrefix")}{" "}
          <span className="text-primary">{t("contact.titleHighlight")}</span>
        </h2>

        <p className="section-subtitle">{t("contact.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8 text-start">
            <h3 className="text-2xl font-semibold">{t("contact.infoTitle")}</h3>

            <div className="space-y-6">
              <InfoItem icon={<Mail className="h-5 w-5" />} title={t("contact.labels.email")}>
                <a
                  href="mailto:nawwaralissa1997@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  nawwaralissa1997@gmail.com
                </a>
              </InfoItem>

              <InfoItem icon={<Phone className="h-5 w-5" />} title={t("contact.labels.phone")}>
                <a
                  href="tel:+963984695648"
                  className="hover:text-primary transition-colors"
                  dir="ltr"
                >
                  +963 984 695 648
                </a>
              </InfoItem>

              <InfoItem icon={<MapPin className="h-5 w-5" />} title={t("contact.labels.location")}>
                {t("contact.values.location")}
              </InfoItem>
            </div>

            <div>
              <h4 className="font-medium mb-4">{t("contact.connectTitle")}</h4>
              <div className="flex items-center gap-4">
                <SocialLink href="https://github.com/Nawar12345678" label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href="mailto:nawwaralissa1997@gmail.com" label="Email">
                  <MailIcon className="h-5 w-5" />
                </SocialLink>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-start">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <FormField
                id="contact-name"
                label={t("contact.form.name")}
                value={form.name}
                onChange={handleChange("name")}
                placeholder={t("contact.form.namePlaceholder")}
                error={errors.name}
              />
              <FormField
                id="contact-email"
                label={t("contact.form.email")}
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder={t("contact.form.emailPlaceholder")}
                error={errors.email}
                dir="ltr"
              />
              <FormField
                id="contact-message"
                label={t("contact.form.message")}
                as="textarea"
                value={form.message}
                onChange={handleChange("message")}
                placeholder={t("contact.form.messagePlaceholder")}
                error={errors.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full",
                  isSubmitting && "opacity-80 pointer-events-none"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("contact.form.sending")}
                  </>
                ) : (
                  <>
                    {t("contact.form.send")}
                    <Send size={16} className="rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">{icon}</div>
    <div className="flex-1 min-w-0">
      <h4 className="font-medium mb-0.5">{title}</h4>
      <div className="text-muted-foreground break-all text-sm">{children}</div>
    </div>
  </div>
);

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-xl border border-border/60 bg-card hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300"
  >
    {children}
  </a>
);

const FormField = ({
  id,
  label,
  type = "text",
  as,
  value,
  onChange,
  placeholder,
  error,
  dir,
}) => {
  const sharedProps = {
    id,
    value,
    onChange,
    placeholder,
    dir,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: cn("input-field", error && "border-destructive/60 focus:ring-destructive/40"),
  };

  return (
    <div className="text-start">
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea {...sharedProps} rows={4} className={cn(sharedProps.className, "resize-none")} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
