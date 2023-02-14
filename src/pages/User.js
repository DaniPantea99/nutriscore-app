import React from 'react';
import { useTranslation } from 'react-i18next';

function User() {
  const { t } = useTranslation();

  return <div className="p-8">{t('userPage.title')}</div>;
}

export default User;
