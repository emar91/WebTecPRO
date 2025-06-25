document.getElementById("send").addEventListener("click", async () => {
  const producto = document.getElementById("producto").value;
  const falla = document.getElementById("falla").value;
  const sistema = document.getElementById("sistema").value;
  const descripcion = document.getElementById("descripcion").value;
  const nombres = document.getElementById("nombres").value;
  const direccion = document.getElementById("direccion").value;
  const municipio = document.getElementById("municipio").value;
  const zona = document.getElementById("zona").value;

  const datos = {
    producto,
    falla,
    sistema,
    descripcion,
    nombres,
    direccion,
    municipio,
    zona,
  };

  try {
    const res = await fetch("/api/agendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const respuesta = await res.json();
    console.log("Agendado correctamente:", respuesta);
  } catch (error) {
    console.error("Error al agendar:", error);
  }
});
