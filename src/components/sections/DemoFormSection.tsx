import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/siteData';
import { formatBrazilianPhone } from '../../lib/utils';
import { DemoFormData } from '../../types';
import { MotionReveal } from '../common/MotionReveal';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
  Lock,
} from 'lucide-react';

export const DemoFormSection: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    role: '',
    segment: '',
    teamSize: '',
    currentErp: '',
    commercialChallenge: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, informe seu nome completo.';
    }

    if (!formData.workEmail.trim() || !/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Informe um e-mail corporativo válido.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.phone = 'Informe um telefone/WhatsApp válido com DDD.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Informe o nome da sua empresa.';
    }

    if (!formData.segment) {
      newErrors.segment = 'Selecione o segmento da sua empresa.';
    }

    if (!formData.teamSize) {
      newErrors.teamSize = 'Selecione o tamanho da equipe comercial.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'É necessário concordar com o tratamento dos dados.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = (import.meta as any).env?.VITE_FORM_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: '4Sales Redesign Landing Page',
          }),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      sessionStorage.setItem('last_lead_name', formData.fullName);
      sessionStorage.setItem('last_lead_company', formData.company);

      navigate('/obrigado');
    } catch (err) {
      console.error('Submission error:', err);
      navigate('/obrigado');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBrazilianPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  return (
    <section id="demonstracao" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Agende uma Apresentação"
            title="Veja como o 4Sales pode transformar sua operação comercial."
            subtitle="Conte um pouco sobre sua empresa e nossa equipe entrará em contato para entender seus processos, necessidades e objetivos."
            align="center"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Commercial Reassurance */}
          <MotionReveal delay={0.15} direction="left" className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A2540] dark:bg-slate-900 text-white p-7 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-800">
              <div className="flex items-center gap-2 text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Demonstração Personalizada</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 leading-tight">
                O que você verá na apresentação:
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>Navegação prática pelo CRM, emissão de pedidos e Portal B2B.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>Análise de viabilidade da integração com seu ERP atual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>Como configurar suas tabelas de preço, alçadas e políticas comerciais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>Estimativa de cronograma de implantação e capacitação da equipe.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-white">
                  <Calendar className="w-5 h-5 text-[#00D2B4]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Sessão Consultiva (30 min)</span>
                  <span className="text-[11px] text-slate-400">Sem compromisso · Foco na sua operação</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">Prefere falar direto?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Chame no WhatsApp comercial oficial.</p>
                </div>
              </div>
              <Button
                href={COMPANY_INFO.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="sm"
                className="w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform shrink-0"
              >
                {COMPANY_INFO.whatsappFormatted}
              </Button>
            </div>
          </MotionReveal>

          {/* Right Column: Lead Form */}
          <MotionReveal delay={0.2} direction="right" className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome Completo */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Ex: Carlos Britto"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/40' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                {/* E-mail Corporativo */}
                <div>
                  <label htmlFor="workEmail" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    E-mail corporativo *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    value={formData.workEmail}
                    onChange={(e) => {
                      setFormData({ ...formData, workEmail: e.target.value });
                      if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                    }}
                    placeholder="carlos@suaempresa.com.br"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
                      errors.workEmail ? 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/40' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900`}
                  />
                  {errors.workEmail && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block">{errors.workEmail}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telefone / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Telefone ou WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
                      errors.phone ? 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/40' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block">{errors.phone}</span>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: undefined });
                    }}
                    placeholder="Ex: Distribuidora Brasil Ltda"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
                      errors.company ? 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/40' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900`}
                  />
                  {errors.company && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block">{errors.company}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Cargo */}
                <div>
                  <label htmlFor="role" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Seu Cargo
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Ex: Diretor Comercial / Gerente"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900"
                  />
                </div>

                {/* Segmento */}
                <div>
                  <label htmlFor="segment" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Segmento da Empresa *
                  </label>
                  <select
                    id="segment"
                    value={formData.segment}
                    onChange={(e) => {
                      setFormData({ ...formData, segment: e.target.value });
                      if (errors.segment) setErrors({ ...errors, segment: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
                      errors.segment ? 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/40' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900`}
                  >
                    <option value="">Selecione o segmento...</option>
                    <option value="Industria">Indústria / Fabricante</option>
                    <option value="Distribuidora">Distribuidora</option>
                    <option value="Atacadista">Atacadista</option>
                    <option value="Representacao">Representação Comercial</option>
                    <option value="Outro">Outro segmento B2B</option>
                  </select>
                  {errors.segment && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block">{errors.segment}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Usuários da equipe */}
                <div>
                  <label htmlFor="teamSize" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Equipe Comercial (Usuários) *
                  </label>
                  <select
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => {
                      setFormData({ ...formData, teamSize: e.target.value });
                      if (errors.teamSize) setErrors({ ...errors, teamSize: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${
                      errors.teamSize ? 'border-rose-500 bg-rose-50/20 dark:bg-rose-950/40' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900`}
                  >
                    <option value="">Selecione a quantidade...</option>
                    <option value="1-5">1 a 5 usuários</option>
                    <option value="6-15">6 a 15 usuários</option>
                    <option value="16-30">16 a 30 usuários</option>
                    <option value="31-50">31 a 50 usuários</option>
                    <option value="50+">Mais de 50 usuários</option>
                  </select>
                  {errors.teamSize && (
                    <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block">{errors.teamSize}</span>
                  )}
                </div>

                {/* ERP Utilizado */}
                <div>
                  <label htmlFor="currentErp" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    ERP Utilizado na Empresa
                  </label>
                  <input
                    type="text"
                    id="currentErp"
                    value={formData.currentErp}
                    onChange={(e) => setFormData({ ...formData, currentErp: e.target.value })}
                    placeholder="Ex: TOTVS Protheus, SAP, Sankhya, etc."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900"
                  />
                </div>
              </div>

              {/* Principal Desafio Comercial */}
              <div>
                <label htmlFor="commercialChallenge" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Principal desafio comercial a ser resolvido
                </label>
                <textarea
                  id="commercialChallenge"
                  rows={2}
                  value={formData.commercialChallenge}
                  onChange={(e) => setFormData({ ...formData, commercialChallenge: e.target.value })}
                  placeholder="Ex: Demora na emissão de pedidos em campo, erros de preços, catálogo desatualizado..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:dark:bg-slate-900"
                />
              </div>

              {/* LGPD Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={(e) => {
                      setFormData({ ...formData, privacyConsent: e.target.checked });
                      if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: undefined });
                    }}
                    className="mt-1 w-4 h-4 text-[#0066F5] rounded border-slate-300 dark:border-slate-700 focus:ring-[#0066F5]"
                  />
                  <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Concordo em receber o contato da equipe da Fabritech / 4Sales e confirmo que li e aceito a{' '}
                    <a
                      href="/politica-de-privacidade"
                      target="_blank"
                      className="text-[#0066F5] dark:text-cyan-400 underline font-semibold hover:text-[#0052c7] dark:hover:text-cyan-300"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </span>
                </label>
                {errors.privacyConsent && (
                  <span className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 block font-medium">
                    {errors.privacyConsent}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full justify-center text-sm sm:text-base font-bold shadow-md shadow-slate-900/10 hover:scale-[1.01] active:scale-[0.99] transition-transform"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Solicitar minha demonstração
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 pt-2">
                <Lock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>Seus dados comerciais estão protegidos e não serão compartilhados.</span>
              </div>

            </form>
          </MotionReveal>

        </div>

      </div>
    </section>
  );
};
