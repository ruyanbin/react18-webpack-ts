
// 函数式组件
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
const I18nBtn: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Button type="link" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
        {i18n.language === 'en' ? '设置中文' : '设置英文'}
      </Button>
    </div>
  );
};

export default I18nBtn;
