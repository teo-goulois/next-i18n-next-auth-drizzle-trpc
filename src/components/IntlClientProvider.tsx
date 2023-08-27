import pick from "lodash/pick";

import React, { PropsWithChildren } from "react";
import {
  useLocale,
  NextIntlClientProvider,
  useMessages,
  useTranslations,
  AbstractIntlMessages,
} from "next-intl";

type Props = {
  name: typeof useTranslations extends (arg: infer U) => any ? U : never;
};

export const IntlClientProvider = ({
  children,
  name,
}: PropsWithChildren<Props>) => {
  const locale = useLocale();
  const messages = useMessages() as AbstractIntlMessages;

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pick(messages, name as string)}>
      {children}
    </NextIntlClientProvider>
  );
};
