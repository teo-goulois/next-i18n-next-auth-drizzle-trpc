import Image from 'next/image';
import {useFormatter, useNow, useTimeZone, useTranslations} from 'next-intl';
/* import ClientLink from '../../components/ClientLink';
import ClientRouterWithoutProvider from '../../components/ClientRouterWithoutProvider';
import CoreLibrary from '../../components/CoreLibrary'; */
import LocaleSwitcher from '../../components/LocaleSwitcher';
import PageLayout from '../../components/PageLayout';
/* import MessagesAsPropsCounter from '../../components/client/01-MessagesAsPropsCounter';
import MessagesOnClientCounter from '../../components/client/02-MessagesOnClientCounter';
 */import {Link} from '../../navigation';
import { Todos } from '@/components/example/Todos';
import { ServerTodos } from '@/components/example/ServerTodos';
type Props = {
  searchParams: Record<string, string>;
};

export default function Index({searchParams}: Props) {
  const t = useTranslations('Index');
  const format = useFormatter();
  const now = useNow();
  const timeZone = useTimeZone();

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
     
      <LocaleSwitcher />
      <p data-testid="SearchParams">{JSON.stringify(searchParams, null, 2)}</p>
      <Todos />
      <p>SERVER v</p>
      <ServerTodos />
    </PageLayout>
  );
}