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
          <FormField
            label="Deus te chama pelo nome, qual é o seu? (Nome completo):"
            type="text"
            id="nome_completo"
            name="entry."
            required
          />

          {/* Campo RG */}
          <FormField
            label="RG:"
            type="number"
            id="rg"
            name="entry."
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
            name="entry."
            required
            value={birthdate}
            onChange={handleDateChange}
          />

          {/* Campo Sexo */}
          <FormField
            label="Sexo:"
            as="radio"
            id="sexo"
            name="entry."
            required
            options={[
              { value: "Masculino", label: "Solteiro" },
              { value: "Feminino", label: "Casado" },
            ]}
          />

          {/* Campo WhatsApp */}
          <FormField
            label="WhatsApp:"
            as="input"
            type="text"
            id="whatsapp"
            name="entry."
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

          {/* WhatsApp Responsavel*/}
          <FormField
            label="WhatsApp de um responsável:"
            as="input"
            type="text"
            id="whatsapp_responsavel"
            name="entry."
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

          {/* Seção de Endereço */}
          <h3 className="text-lg font-semibold">Endereço Completo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Rua */}
            <FormField
              label="Rua"
              type="text"
              id="rua"
              name="entry.rua"
              required
              placeholder="Ex: Rua das Flores"
            />

            {/* Número */}
            <FormField
              label="Número"
              type="number"
              id="numero"
              name="entry.numero"
              required
              min="1"
              placeholder="Ex: 123"
            />

            {/* Complemento */}
            <FormField
              label="Complemento"
              type="text"
              id="complemento"
              name="entry.complemento"
              placeholder="Ex: Apt 45, Bloco B"
            />

            {/* Bairro */}
            <FormField
              label="Bairro"
              type="text"
              id="bairro"
              name="entry.bairro"
              required
              placeholder="Ex: Centro"
            />

            {/* Cidade */}
            <FormField
              label="Cidade"
              type="text"
              id="cidade"
              name="entry.cidade"
              required
              placeholder="Ex: Hortolândia"
            />

            {/* Estado */}
            <FormField
              label="Estado"
              as="select"
              id="estado"
              name="entry.estado"
              required
              options={[
                { value: "SP", label: "São Paulo" },
                { value: "RJ", label: "Rio de Janeiro" },
                // Adicione todos os estados
              ]}
            />

            {/* CEP */}
            <FormField
              label="CEP"
              type="text"
              id="cep"
              name="entry.cep"
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

          {/* Religião */}
          <FormField
            label="Religião (se tiver): "
            type="text"
            id="religiao"
            name="entry."
            required
          />

          {/* Sacamentos */}
          <FormField
            label="Quais Sacramentos possui?:"
            as="select"
            id="sacramentos"
            name="entry."
            required
            options={[
              { value: "Batismo", label: "Batismo" },
              { value: "1° Eucaristia", label: "1° Eucaristia" },
              { value: "Crisma", label: "Crisma" },
              { value: "Matrimônio", label: "Matrimônio" },
              { value: "Nenhum", label: "Nenhum" },
            ]}
          />

          {/* Religião */}
          <FormField
            label="Paróquia/Comunidade:"
            type="text"
            id="paroquia"
            name="entry."
            required
          />

          {/* Estado Civil */}
          <FormField
            label="Estado Civil:"
            as="select"
            id="estado_civil"
            name="entry."
            required
            options={[
              { value: "Solteiro", label: "Solteiro" },
              { value: "Casado", label: "Casado" },
              { value: "Divorciado", label: "Divorciado" },
              { value: "Viuvo", label: "Viuvo" },
              { value: "Amasiado", label: "Amasiado" },
            ]}
          />

          {/* Doenca Cronica */}
          <FormField
            label="Possui alguma doença crônica?"
            type="text"
            id="doenca_cronica"
            name="entry."
            required
          />

          {/* Alergia */}
          <FormField
            label="Possui alguma alergia?"
            type="text"
            id="alergia"
            name="entry."
            required
          />

          {/* Medicamento Controlado */}
          <FormField
            label="Faz uso de medicamento controlado?"
            as="textarea"
            rows={4}
            id="medicamento_controlado"
            name="entry."
            required
          />

          {/* Analgesico */}
          <FormField
            label="Pode tomar analgésico?"
            as="radio"
            id="analgesico"
            name="entry."
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Nao", label: "Não" },
            ]}
          />

          {/* Outras Restrições */}
          <FormField
            label="Outras restrições:"
            type="text"
            id="outras_restricoes"
            name="entry."
            required
          />

          {/* Contato de Emergência */}
          <FormField
            label="Contato de emergência:"
            type="text"
            id="contato_emergencia"
            name="entry."
            required
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              e.currentTarget.value = e.currentTarget.value
                .replace(/\D/g, "") // Remove tudo que não é dígito
                .replace(/(\d{2})(\d)/, "($1) $2") // Coloca parênteses around DDD
                .replace(/(\d{5})(\d)/, "$1-$2") // Celular com 5 dígitos antes do hífen
                .replace(/(-\d{4})\d+?$/, "$1") // Limita a 4 dígitos após o hífen
                .substring(0, 15); // Limita o tamanho máximo
            }}
          />

          {/* Como conheceu o Eleutheria? */}
          <FormField
            label="Como conheceu o Eleutheria?"
            as="select"
            id="como_conheceu"
            name="entry."
            required
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Convite de Amigos", label: "Convite de Amigos" },
              { value: "Convite dos Pais", label: "Convite dos Pais" },
              { value: "Aviso na Missa", label: "Aviso na Missa" },
              { value: "Outro", label: "Outro" },
            ]}
          />

          {/* Autoriza o uso de imagem */}
          <FormField
            label="Autoriza o uso de imagem?"
            as="radio"
            id="uso_imagem"
            name="entry."
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Nao", label: "Não" },
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
