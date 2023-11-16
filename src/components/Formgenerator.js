import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

const FormGenerator = () => {
  const [formType, setFormType] = useState("");

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  const [nom, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [csp, setCsp] = useState("");
  const [photo, setphoto] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const [cni, setcni] = useState("");
  const [noms, setNoms] = useState("");
  const [ville, setVille] = useState("");
  const [statut, setStatut] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://apitest-psi.vercel.app/users/${userId}`)
        .then((response) => {
          setUserData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  const formData = {
    nom: nom,
    age: age,
    phone: phone,
    csp: csp,
    photo: photo,
  };
  
  const formDatas = {
    cni: cni,
    noms: noms,
    ville: ville,
    statut: statut,
    details: details,
  };

  const handleChange = (e) => {
    setCsp(e.target.value);

  };

  const handleChanged = (e) =>{
    setVille(e.target.value)
  }

  

  const handleSubmit = (e) => {
    if (
      formData.nom === "" ||
       formData.age === "" ||
        formData.csp === "" ||
      formData.phone === ""
    ) {
      alert("veuillez remplir tous les champs");
    } else {
      e.preventDefault();
      axios
        .post("https://apitest-psi.vercel.app/users/", formData)
        .then((response) => {
          console.log(response.data);
          setUserId(response.data.data._id);
        })
        .catch((error) => {
          // Gérer les erreurs de requête ici
          console.error(error);
        });
    }
  };

  const handleSubmits = (e) => {
    if (
      formDatas.cni === "" ||
      formDatas.age === "" ||
      formDatas.ville === "empty"
    ) {
      alert("veuillez remplir tous les champs");
    } else {
      e.preventDefault();
      axios
        .post("https://apitest-psi.vercel.app/users2/", formDatas)
        .then((response) => {
          // Gérer la réponse de l'API ici
          console.log(response.data);
        })
        .catch((error) => {
          // Gérer les erreurs de requête ici
          console.error(error);
        });
    }
  };
  const renderForm = () => {
    switch (formType) {
      case "F1":
        return (
          <div className=" bg-gradient-to-r from-gray-100 via-slate-300 to-neutral-100">
            <div className=" my-auto bg-gray-400 w-[28%] mx-auto ">
              <form action="" className="text-center ">
                <div className="bg-black w-10 h-10 ml-[90%] text-white text-center font-bold rounded-bl-xl">
                  F1
                </div>
                <label className="font-bold">Nom :</label>
                <input
                  type="text"
                  className="px-4 py-2 border focus:outline-none focus:ring-orange focus:border-orange-300 mb-5 ml-2"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <br />
                <label className="font-bold ml-[-180px]">Age:</label>{" "}
                <input
                  type="number"
                  className="px-4 py-2 border focus:outline-none focus:ring-orange focus:border-orange-300 ml-2 mb-5 w-24"
                  placeholder=""
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
                <br />
                <label className="font-bold mr-[-15px]">Tel :</label>
                <input
                  type="number"
                  className="px-4 py-2 border ml-8 focus:outline-none focus:ring-orange focus:border-orange-300 mb-5"
                  placeholder="Numero de telephone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <br />
                <label className="font-bold ml-[-40px]">CSP :</label>
                <select
                  value={csp}
                  onChange={handleChange}
                  className="px-4 py-2 border ml-2 focus:outline-none focus:ring-orange focus:border-orange-300 mb-5 w-60"
                >
                  <option value="empty"></option>
                  <option value="csp1">csp1</option>
                  <option value="csp2">csp2</option>
                </select>
                <br />
                <label className="font-bold ml-[-20px]">Photo :</label>
                <input
                  type="file"
                  className="px-4 py-2 border ml-2 focus:outline-none focus:ring-orange focus:border-orange-300 mb-5 w-56"
                  value={photo}
                />
                <br />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-700 rounded-md ml-4 text-white mt-2 my-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>

              </form>
              <br /><button className="bg-blue-600 rounded-md font-bold text-white py-2 px-4">
                <Link to="/dynamicform" className="">Page 2</Link>
              </button>
            </div>
            {userData && (
  <div>
    <QRCode value={`Nom: ${userData.nom}, Age: ${userData.age}, Tel: ${userData.phone}, CSP: ${userData.csp}, Photo: ${userData.photo}`} />
  </div>
)}
          </div>
        );
      case "F2":
        return (
          <div className=" bg-gradient-to-r from-gray-100 via-slate-300 to-neutral-100">
            <div className=" my-auto bg-gray-400 w-[28%] mx-auto ">
              <form action="" className="text-center ">
                <div className="bg-black w-9 h-10 ml-[92%] text-white text-center font-bold rounded-bl-xl">
                  F2
                </div>
                <label className="font-bold">No CNI:</label>
                <input
                  type="text"
                  className="px-4 py-2 border ml-3 focus:outline-none focus:ring-orange focus:border-orange-300 mb-5"
                  placeholder=""
                  value={cni}
                  onChange={(e) => setcni(e.target.value)}
                  required
                />
                <br />
                <label className="font-bold ml-[-185px]">Noms: </label>
                <input
                  type="text"
                  className="px-4 py-2 border ml-5 focus:outline-none focus:ring-orange focus:border-orange-300 mb-5 w-24"
                  placeholder=""
                  value={noms}
                  onChange={(e) => setNoms(e.target.value)}
                  required
                />
                <br />
                <label className="font-bold ml-[-30px]">Ville: </label>
                <select className="h-10 w-[56%] ml-[32px]" onChange={handleChanged}>
                  <option value="empty" className="rounded-md h-10 w-96 font-sans"></option>
                  <option value="Yaounde" className="rounded-md h-10 w-96 font-sans">
                    Yaounde
                  </option>
                  <option value="Douala" className="rounded-md h-10 w-96 font-sans">
                    Douala
                  </option>
                </select>
                <br />
                <div className="absolute ml-12 mt-4 font-bold">Statut:</div>

                <div className="block mt-2">
                  <div>
                    <input name="statut" className="ml-[-36px]" type="radio"></input>
                    <label>Marie</label>
                  </div>
                  <div>
                    <input name="statut" type="radio"></input>
                    <label>Celibataire</label>
                  </div>
                </div>

                <br />
                <div className="absolute ml-14 font-bold mt-[-8px]">
                  Details:
                </div>
                <textarea
                  value={details}
                  className=" w-68 h-24 mb-2 ml-16"
                  style={{ resize: "none" }}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <br />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-700 rounded-md ml-4 text-white mt-2 my-2"
                  onClick={handleSubmits}
                >
                  Submit
                </button>
              </form>
              <br /><button className="bg-blue-600 rounded-md font-bold text-white py-2 px-4">
                <Link to="/dynamicform" className="">Page 2</Link>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Générateur de formulaires</h1>
      <div className="mb-4">
        <label className="block text-gray-700">
          Sélectionnez le type de formulaire :
        </label>
        <select
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={formType}
          onChange={handleFormTypeChange}
        >
          <option value="">-- Sélectionnez --</option>
          <option value="F1">Formulaire F1</option>
          <option value="F2">Formulaire F2</option>
          <option value="F3">Formulaire F3</option>
        </select>
      </div>
      {renderForm()}

      <div className="font-bold text-xl ml-96">
          <p>FONGANG Uried Merveil</p>
           <p>680603928/695782165</p>
        </div>
    </div>
  );
};

export default FormGenerator;
