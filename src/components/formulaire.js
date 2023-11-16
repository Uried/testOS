import React, { useState } from "react";
import axios from "axios";

function DynamicForm() {
  const [fields, setFields] = useState([
    { type: "text", placeholder: "Nom", value: "" },
    { type: "number", placeholder: "", value: "" },
    { type: "tel", placeholder: "Numero de telephone", value: "" },
  ]);

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index].value = event.target.value;
    setFields(values);
  };

  const handleAddField = (type) => {
    const values = [...fields];
    values.push({ type, value: "" });
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Soumission du formulaire à l'API
    axios
      .post("http://localhost:5400/submit-form", fields)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-center bg-gray-400 w-[23%] mr-auto ml-auto mt-5 "
      >
        <div className="bg-black w-10 h-10 ml-[90%] text-white text-center font-bold rounded-bl-xl">
          F1
        </div>

        {fields.map((field, index) => (
          <div key={index}>
            {field.type === "select" ? (
              <div>
                <label className="font-bold">CSP :</label>
                <select
                  value={field.value}
                  onChange={(event) => handleChange(index, event)}
                  className="px-4 py-2 border ml-2 focus:outline-none focus:ring-orange focus:border-orange-300 mb-5 w-60"
                >
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <br />
              </div>
            ) : (
              <div>
                <label className="font-bold">
                  {field.type === "text" ? "Texte :" : "Nombre:"}
                </label>
                <input
                  type={field.type}
                  className="px-4 py-2 border focus:outline-none focus:ring-orange focus:border-orange-300 mb-5 ml-2"
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
                <br />
              </div>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 hover:bg-orange-700 rounded-md ml-4 text-white mt-2 my-2"
        >
          Submit
        </button>

        <div>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md ml-4 text-white mt-2 my-2"
            onClick={() => handleAddField("text")}
          >
            Ajouter un champ texte
          </button>

          <button
            type="button"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md ml-4 text-white mt-2 my-2"
            onClick={() => handleAddField("number")}
          >
            Ajouter un champ nombre
          </button>
        </div>
      </form>
    </>
  );
}

export default DynamicForm;