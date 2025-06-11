"use client";
import { useRef } from "react";
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
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const calculateAge = (birthDate: Date) => {
    const referenceDate = new Date('2025-06-20'); // <- Data limite
    let age = referenceDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = referenceDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && referenceDate.getDate() < birthDate.getDate())
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
        setAgeError("Você deve ter pelo menos 14 anos completos para se inscrever");
      } else {
        setAgeError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  // Enviar os dados do formulário
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  try {
    await fetch(form.action, {
      method: form.method,
      body: formData,
      mode: "no-cors", // Necessário para Google Forms
    });

    console.log("Formulário enviado com sucesso.");
    setShowPopup(true);  // Mostrar o popup de confirmação
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
  }
};

const handleClosePopup = () => {
  setShowPopup(false);
  setFormSubmitted((prev) => !prev); // Força a re-renderização

  // Limpar o formulário
  if (formRef.current) {
    formRef.current.reset();
  }
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
            <strong>Música Tema:</strong> Eis-me aqui – Colo de Deus
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
            <strong>Retorno:</strong> 22/06/2025 às 17h30 - Saída de Santa
            Bárbara d’Oeste
          </p>
          <p>
            <strong>Faixa etária:</strong> 14 a 30 anos
          </p>
          <p>
            <strong>Valor:</strong> R$ 100 - 1° lote até 15/05
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Preencha o formulário abaixo
        </h2>

        <form
          ref={formRef}
          action=""/*inserir o link*/
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Campo Nome Completo */}
          <h3 className="text-lg font-semibold">Dados do Retirante</h3>
          <FormField
            label="Deus te chama pelo nome, qual é o seu?"
            type="text"
            id="nome_completo"
            name="entry.1200995469"
            required
            placeholder="Nome Completo"
          />

          {/* Campo RG */}
          <FormField
            label="RG:"
            type="text"
            id="rg"
            name="entry.1085126047"
            required
            inputMode="text"
            pattern="[0-9a-zA-Z.-]*"
            placeholder="Ex: 123456789"
          />

          {/* Campo Data de Nascimento */}
          <FormField
            label="Data de Nascimento:"
            type="date"
            id="data_nascimento"
            name="entry.371421258"
            required
            value={birthdate}
            onChange={handleDateChange}
          />

          {/* Campo Sexo */}
          <FormField
            label="Sexo:"
            as="radio"
            id="sexo"
            name="entry.1169466424"
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
            name="entry.2023705290"
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
            name="entry.1830455896"
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
              name="entry.1695777063"
              required
              placeholder="Ex: Rua das Flores"
            />

            {/* Número */}
            <FormField
              label="Número"
              type="number"
              id="numero"
              name="entry.1977844900"
              required
              min="1"
              placeholder="Ex: 123"
            />

            {/* Complemento */}
            <FormField
              label="Complemento"
              type="text"
              id="complemento"
              name="entry.1129137839"
              placeholder="Ex: Apt 45, Bloco B"
            />

            {/* Bairro */}
            <FormField
              label="Bairro"
              type="text"
              id="bairro"
              name="entry.1890857757"
              required
              placeholder="Ex: Centro"
            />

            {/* Cidade */}
            <FormField
              label="Cidade"
              type="text"
              id="cidade"
              name="entry.991185149"
              required
              placeholder="Ex: Hortolândia"
            />

            {/* Estado */}
            <FormField
              label="Estado"
              as="select"
              id="estado"
              name="entry.1661748353"
              required
              options={[
                { value: "SP", label: "São Paulo" },
                // Adicione todos os estados
              ]}
            />

            {/* CEP */}
           <div className="mb-15">
            <FormField
              label="CEP"
              type="text"
              id="cep"
              name="entry.1678420663"
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
            name="entry.422906873"
            required
          />

          {/* Batismo */}
          <h3 className="font-semibold">Preencha quais desses sacramentos você possui</h3>
          <FormField
            label="Bastismo"
            as="radio"
            id="batismo"
            name="entry.319303028"
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Não", label: "Não" },
            ]}
          />

          {/* Eucaristia */}
          <FormField
            label="1° Eucaristia"
            as="radio"
            id="eucaristia"
            name="entry.1524559352"
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Não", label: "Não" },
            ]}
          />

          {/* Crisma */}
          <FormField
            label="Crisma"
            as="radio"
            id="crisma"
            name="entry.128676163"
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Não", label: "Não" },
            ]}
          />

          {/* Matrimônio */}
          <FormField
            label="Matrimônio"
            as="radio"
            id="matrimonio"
            name="entry.923626084"
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Não", label: "Não" },
            ]}
          />

          {/* Paróquia */}
          <FormField
            label="Paróquia/Comunidade:"
            type="text"
            id="paroquia"
            name="entry.136460630"
            required
          />

          {/* Doenca Cronica */}
          <FormField
            label="Possui alguma doença crônica?"
            as="textarea"
            rows={4}
            id="doenca_cronica"
            name="entry.408708581"
            required
          />

          {/* Alergia */}
          <FormField
            label="Possui alguma alergia?"
            as="textarea"
            rows={4}
            id="alergia"
            name="entry.849647125"
            required
          />

          {/* Medicamento Controlado */}
          <FormField
            label="Faz uso de medicamento controlado?"
            as="textarea"
            rows={4}
            id="medicamento_controlado"
            name="entry.1971679924"
            required
          />

          {/* Analgesico */}
          <FormField
            label="Pode tomar analgésico?"
            as="radio"
            id="analgesico"
            name="entry.439537850"
            required
            options={[
              { value: "Sim", label: "Sim" },
              { value: "Não", label: "Não" },
            ]}
          />

          {/* Outras Restrições */}
          <FormField
            label="Outras restrições:"
            as="textarea"
            rows={4}
            id="outras_restricoes"
            name="entry.1792122689"
            required
          />

          {/* Como conheceu o Eleutheria? */}
         <div className="mb-15">
          <FormField
            label="Como conheceu o Eleutheria?"
            as="select"
            id="como_conheceu"
            name="entry.1918424104"
            required
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Convite de amigo", label: "Convite de Amigos" },
              { value: "Convite dos pais", label: "Convite dos Pais" },
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
            name="entry.1332037287"
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
            name="entry.532155946"
            required
          />
        </div>
          
          
          {/* Autoriza o uso de imagem */}
          <h3 className="text-lg font-semibold">Uso de imagem</h3>
          <FormField
            label="Autoriza o uso de imagem?"
            as="radio"
            id="uso_imagem"
            name="entry.341597136"
            required
            options={[
              { value: "Sim, a comunicação pode tirar fotos e vídeos meus e publicar nas mídias sociais.", label: "Sim, autorizo." },
              { value: "Não desejo que minha imagem seja registrada nas mídias sociais.", label: "Não Autorizo." },
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
          {showPopup && (
            <div className="fixed inset-0 z-40 flex items-center justify-center">
              {/* Camada invisível para bloquear interações no fundo */}
              <div className="absolute inset-0 bg-black/50 cursor-not-allowed z-40"></div>

              {/* Popup em si */}
              <div className="relative bg-white border border-green-500 text-green-700 rounded-lg shadow-lg p-4 z-50 max-w-sm w-full mx-4">

                  {/* Botão de Fechar "X" no canto superior direito */}
                  <button
                    onClick={handleClosePopup}
                    className="absolute top-2 right-2 text-green-700 hover:text-green-900 text-lg font-bold"
                    aria-label="Fechar"
                  >
                    ×
                  </button>
                
                <h2 className="text-lg font-bold mb-2">Formulário Enviado!</h2>
                <p>Parabéns, sua inscrição foi concluída!</p>
                <p>Tivemos uma grande procura pelo retiro e, devido ao número de inscrições, você entrou na fila de espera.</p>
                <p><p>Caso haja alguma desistência ou surja uma nova vaga entraremos em contato com você!</p></p>
                
                {/* Botão Secretaria simples */}
                <a
                  href="https://wa.me/19982305367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition inline-block"
                >
                  Clique Aqui
                </a>
              
            </div>
          </div>
          )}

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
