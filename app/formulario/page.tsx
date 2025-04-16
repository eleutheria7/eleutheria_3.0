"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormField from "../components/FormField";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";

export default function FormularioPage() {
  const router = useRouter();
  const [birthdate, setBirthdate] = useState("");
  const [ageError, setAgeError] = useState("");

  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setBirthdate(date);

    if (date) {
      const birthDate = new Date(date);
      const age = calculateAge(birthDate);

      if (age < 14) {
        setAgeError(
          "Você deve ter pelo menos 14 anos completos para se inscrever",
        );
      } else {
        setAgeError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!birthdate) {
      setAgeError("Por favor, insira sua data de nascimento");
      return;
    }

    const birthDate = new Date(birthdate);
    const age = calculateAge(birthDate);

    if (age < 14) {
      setAgeError("Inscrição permitida apenas para maiores de 14 anos");
      return;
    }

    // Resto da lógica de envio do formulário
    router.push("/success");
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ELEUTHERIA 2025
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            “Eis a vontade de Deus: A vossa Santificação”
          </p>
          <p className="text-gray-600 italic">I Tessalonicenses 4, 3</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-8 space-y-2">
          <p>
            <strong>Data:</strong> 20, 21 e 22 de Junho/2025
          </p>
          <p>
            <strong>Música Tema:</strong> Eis-me aqui– Colo de Deus
          </p>
          <p>
            <strong>Local:</strong> Centro de Formação Religioso – Luiza G.
            Freguglia
          </p>
          <p>
            <strong>Cidade:</strong> Santa Bárbara d’Oeste
          </p>
          <p>
            <strong>Saída:</strong> 20/06/2025 às 19h00 - Paróquia Santa Luzia
          </p>
          <p>
            <strong>Retorno:</strong> 22/06/2025 às 17h30, saída de Santa
            Bárbara d’Oeste
          </p>
          <p>
            <strong>Faixa etária:</strong> 14 a 30 anos
          </p>
          <p>
            <strong>Valor:</strong> 1º Lote até 15/05, R$ 100
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Preencha o formulário abaixo
        </h2>

        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSde4P_3rOrXZembrQToUQKjCPJH8TDyGiC6sI1U9ln8A_pYug/formResponse"
          method="POST"
          target="_blank"
          className="space-y-6"
        >
          {/* Campo Nome Completo */}
          <h3 className="text-lg font-semibold">Dados do Retirante</h3>
          <FormField
            label="Deus te chama pelo nome, qual é o seu? (Nome completo):"
            type="text"
            id="nome_completo"
            name="entry.1625406627"
            required
          />

          {/* Campo RG */}
          <FormField
            label="RG:"
            type="number"
            id="rg"
            name="entry.1190390295"
            required
            inputMode="numeric"
            pattern="[0-9.-]*"
            placeholder="Ex: 12345678-9"
          />

          {/* Campo Data de Nascimento */}
          <FormField
            label="Data de Nascimento:"
            type="date"
            id="data_nascimento"
            name="entry.262154056"
            required
            value={birthdate}
            onChange={handleDateChange}
          />

          {/* Campo Sexo */}
          <FormField
            label="Sexo:"
            as="radio"
            id="sexo"
            name="entry.875875820"
            required
            options={[
              { value: "Masculino", label: "Masculino" },
              { value: "Feminino", label: "Feminino" },
            ]}
          />

          {/* Campo WhatsApp */}
          <FormField
            label="WhatsApp:"
            as="input"
            type="text"
            id="whatsapp"
            name="entry.1814162605"
            required
            inputMode="numeric"
            pattern="^[-() 0-9]+$"
            placeholder="Ex: (19) 99999-9999"
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.value = e.currentTarget.value
                .replace(/\D/g, "") // Remove tudo que não é dígito
                .replace(/(\d{2})(\d)/, "($1) $2") // Coloca parênteses around DDD
                .replace(/(\d{5})(\d)/, "$1-$2") // Celular com 5 dígitos antes do hífen
                .replace(/(-\d{4})\d+?$/, "$1") // Limita a 4 dígitos após o hífen
                .substring(0, 15); // Limita o tamanho máximo
            }}
          />
          
          {/* Estado Civil */}
         <div className="mb-15">
          <FormField
            label="Estado Civil:"
            as="select"
            id="estado_civil"
            name="entry.325339926"
            required
            options={[
              { value: "Solteiro", label: "Solteiro" },
              { value: "Casado", label: "Casado" },
              { value: "Divorciado", label: "Divorciado" },
              { value: "Viuvo", label: "Viuvo" },
              { value: "Amasiado", label: "Amasiado" },
            ]}
          />
         </div>

          {/* Seção de Endereço */}
          <h3 className="text-lg font-semibold">Endereço Completo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Rua */}
            <FormField
              label="Rua"
              type="text"
              id="rua"
              name="entry.604883494"
              required
              placeholder="Ex: Rua das Flores"
            />

            {/* Número */}
            <FormField
              label="Número"
              type="number"
              id="numero"
              name="entry.696160417"
              required
              min="1"
              placeholder="Ex: 123"
            />

            {/* Complemento */}
            <FormField
              label="Complemento"
              type="text"
              id="complemento"
              name="entry.360566182"
              placeholder="Ex: Apt 45, Bloco B"
            />

            {/* Bairro */}
            <FormField
              label="Bairro"
              type="text"
              id="bairro"
              name="entry.1363635295"
              required
              placeholder="Ex: Centro"
            />

            {/* Cidade */}
            <FormField
              label="Cidade"
              type="text"
              id="cidade"
              name="entry.2084384625"
              required
              placeholder="Ex: Hortolândia"
            />

            {/* Estado */}
            <FormField
              label="Estado"
              as="select"
              id="estado"
              name="entry.833735459"
              required
              options={[
                { value: "SP", label: "São Paulo" },
                { value: "RJ", label: "Rio de Janeiro" },
                // Adicione todos os estados
              ]}
            />

            {/* CEP */}
           <div className="mb-15">
            <FormField
              label="CEP"
              type="text"
              id="cep"
              name="entry.513467057"
              required
              inputMode="numeric"
              pattern="[0-9]{5}-?[0-9]{3}"
              placeholder="Ex: 12345-678"
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/\D/g, "")
                  .replace(/(\d{5})(\d)/, "$1-$2")
                  .substring(0, 9);
              }}
            />
           </div>
          </div>

          {/* Religião */}
          <h3 className="text-lg font-semibold">Dados Complementares</h3>
          <FormField
            label="Religião (se tiver): "
            type="text"
            id="religiao"
            name="entry.21587281"
            required
          />

        {/* Sacramentos */}
        <div className="block mb-8">
          <FormField
            label="Quais Sacramentos possui?:"
            as="checkbox"
            id="sacramentos"
            name="entry.1069811539"
            required
            options={[
              { value: "Batismo", label: "Batismo" },
              { value: "1° Eucaristia", label: "1° Eucaristia" },
              { value: "Crisma", label: "Crisma" },
              { value: "Matrimônio", label: "Matrimônio" },
              { value: "Nenhum", label: "Nenhum" },
            ]}
          />
         </div>

          {/* Paróquia */}
          <FormField
            label="Paróquia/Comunidade:"
            type="text"
            id="paroquia"
            name="entry.1843148734"
            required
          />

          {/* Doenca Cronica */}
          <FormField
            label="Possui alguma doença crônica?"
            as="textarea"
            rows={4}
            id="doenca_cronica"
            name="entry.349133218"
            required
          />

          {/* Alergia */}
          <FormField
            label="Possui alguma alergia?"
            as="textarea"
            rows={4}
            id="alergia"
            name="entry.1845817507"
            required
          />

          {/* Medicamento Controlado */}
          <FormField
            label="Faz uso de medicamento controlado?"
            as="textarea"
            rows={4}
            id="medicamento_controlado"
            name="entry.1319146195"
            required
          />

          {/* Analgesico */}
          <FormField
            label="Pode tomar analgésico?"
            as="radio"
            id="analgesico"
            name="entry.88277559"
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Nao", label: "Não" },
            ]}
          />

          {/* Outras Restrições */}
          <FormField
            label="Outras restrições:"
            as="textarea"
            rows={4}
            id="outras_restricoes"
            name="entry.1924903226"
            required
          />

          {/* Como conheceu o Eleutheria? */}
         <div className="mb-15">
          <FormField
            label="Como conheceu o Eleutheria?"
            as="select"
            id="como_conheceu"
            name="entry.1333170998"
            required
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Convite de Amigos", label: "Convite de Amigos" },
              { value: "Convite dos Pais", label: "Convite dos Pais" },
              { value: "Aviso na Missa", label: "Aviso na Missa" },
              { value: "Outro", label: "Outro" },
            ]}
          />
         </div>
          {/* Contato de Emergência*/}
          <h3 className="text-lg font-semibold">Em caso de emergência</h3>
          <FormField
            label="Contato de emergência:"
            as="input"
            type="text"
            id="contato-emergencia"
            name="entry.1985798356"
            required
            inputMode="numeric"
            pattern="^[-() 0-9]+$"
            placeholder="Ex: (19) 99999-9999"
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.value = e.currentTarget.value
                .replace(/\D/g, "") // Remove tudo que não é dígito
                .replace(/(\d{2})(\d)/, "($1) $2") // Coloca parênteses around DDD
                .replace(/(\d{5})(\d)/, "$1-$2") // Celular com 5 dígitos antes do hífen
                .replace(/(-\d{4})\d+?$/, "$1") // Limita a 4 dígitos após o hífen
                .substring(0, 15); // Limita o tamanho máximo
            }}
          />

          {/* Nome emergência */}
        <div className="mb-15">
          <FormField
            label="Nome do contato de emergência?"
            type="text"
            id="nome_emergência"
            name="entry.1574448511"
            required
          />
        </div>
          
          
          {/* Autoriza o uso de imagem */}
          <h3 className="text-lg font-semibold">Uso de imagem</h3>
          <FormField
            label="Autoriza o uso de imagem?"
            as="radio"
            id="uso_imagem"
            name="entry.667484391"
            required
            options={[
              { value: "Sim, a comunicação pode tirar fotos e vídeos meus e publicar nas mídias sociais.", label: "Sim, a comunicação pode tirar fotos e vídeos meus e publicar nas mídias sociais." },
              { value: "Não desejo que minha imagem seja registrada nas mídias sociais.", label: "Não desejo que minha imagem seja registrada nas mídias sociais." },
            ]}
          />

          {ageError && (
            <div className="text-red-600 text-sm mt-1 p-2 bg-red-50 rounded-lg">
              {ageError}
            </div>
          )}

          {/* Botão de Envio */}
          <button
            type="submit"
            disabled={!!ageError}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              ageError ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            Enviar
          </button>
        </form>

        <div className="mt-6 items-center justify-center">
          <Link
            href="/"
            className="flex flex-wrap gap-4 items-center justify-center text-blue-600 hover:text-blue-500 text-md"
          >
            <FaArrowAltCircleLeft />
            Voltar para a página inicial
          </Link>
        </div>
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
}
