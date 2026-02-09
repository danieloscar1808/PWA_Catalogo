<<<<<<< HEAD
let catalogo=[];

document.getElementById("importFile").addEventListener("change", e=>{
  const f=e.target.files[0]; if(!f)return;
  const r=new FileReader();
  r.onload=x=>{
    try{
      catalogo=JSON.parse(x.target.result);
      localStorage.setItem("catalogo",JSON.stringify(catalogo));
      renderTabla();
    }catch{ alert("Archivo JSON inválido."); }
  };
  r.readAsText(f);
});

window.onload=()=>{
  const saved=localStorage.getItem("catalogo");
  if(saved){ catalogo=JSON.parse(saved); renderTabla(); }
};

function renderTabla(){
  const tb=document.querySelector("#itemsTable tbody");
  tb.innerHTML="";
  catalogo.forEach((item,i)=>{
    const row=document.createElement("tr");
    row.innerHTML=`
      <td contenteditable="true" onblur="editar(${i},'name',this.innerText)">${item.name}</td>
      <td contenteditable="true" onblur="editar(${i},'price',this.innerText)">${item.price}</td>
      <td>
        <select onchange="editar(${i},'category',this.value)">
          <option value="general"${item.category==="general"?" selected":""}>General</option>
          <option value="aire acondicionado split"${item.category==="aire acondicionado split"?" selected":""}>Aire Acondicionado Split</option>
          <option value="eléctrico"${item.category==="eléctrico"?" selected":""}>Eléctrico</option>
          <option value="solar"${item.category==="solar"?" selected":""}>Solar</option>
        </select>
      </td>
      <td><button onclick="eliminar(${i})">Eliminar</button></td>`;
    tb.appendChild(row);
  });
}

function editar(i,campo,val){
  catalogo[i][campo]=campo==="price"?Number(val):val;
  localStorage.setItem("catalogo",JSON.stringify(catalogo));
}

document.getElementById("addForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("addName").value.trim();
  const price=Number(document.getElementById("addPrice").value);
  const category=document.getElementById("addCategory").value;
  if(!name||!price||!category){ alert("Todos los campos son obligatorios."); return;}
  catalogo.push({name,price,category});
  localStorage.setItem("catalogo",JSON.stringify(catalogo));
  renderTabla();
  e.target.reset();
});

function eliminar(i){
  catalogo.splice(i,1);
  localStorage.setItem("catalogo",JSON.stringify(catalogo));
  renderTabla();
}

document.getElementById("exportBtn").addEventListener("click",()=>{
  const data=JSON.stringify(catalogo,null,2);
  const blob=new Blob([data],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="catalogo_actualizado.json";
  a.click();
=======
let catalogo = [];

// ===== IMPORTAR JSON =====
document.getElementById("importFile").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      catalogo = JSON.parse(e.target.result);
      localStorage.setItem("catalogo", JSON.stringify(catalogo));
      renderTabla();
    } catch (err) {
      alert("Archivo JSON inválido.");
    }
  };
  reader.readAsText(file);
});

// ===== CARGAR DESDE LOCALSTORAGE =====
window.onload = () => {
  const saved = localStorage.getItem("catalogo");
  if (saved) {
    catalogo = JSON.parse(saved);
    renderTabla();
  }
};

// ===== RENDER TABLA =====
function renderTabla() {
  const tbody = document.querySelector("#itemsTable tbody");
  tbody.innerHTML = "";

  catalogo.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td contenteditable="true" onblur="editar(${index}, 'name', this.innerText)">${item.name}</td>
      <td contenteditable="true" onblur="editar(${index}, 'price', this.innerText)">${item.price}</td>
      <td>
        <select onchange="editar(${index}, 'category', this.value)">
          <option value="general" ${item.category === "general" ? "selected" : ""}>General</option>
          <option value="aire acondicionado split" ${item.category === "aire acondicionado split" ? "selected" : ""}>Aire Acondicionado Split</option>
          <option value="eléctrico" ${item.category === "eléctrico" ? "selected" : ""}>Eléctrico</option>
          <option value="solar" ${item.category === "solar" ? "selected" : ""}>Solar</option>
        </select>
      </td>
      <td><button onclick="eliminar(${index})">Eliminar</button></td>
    `;

    tbody.appendChild(row);
  });
}

// ===== EDITAR =====
function editar(index, campo, valor) {
  catalogo[index][campo] = campo === "price" ? Number(valor) : valor;
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
}

// ===== AGREGAR ITEM =====
document.getElementById("addForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("addName").value.trim();
  const price = Number(document.getElementById("addPrice").value);
  const category = document.getElementById("addCategory").value;

  if (!name || !price || !category) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  catalogo.push({ name, price, category });
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
  renderTabla();

  e.target.reset();
});

// ===== ELIMINAR =====
function eliminar(index) {
  catalogo.splice(index, 1);
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
  renderTabla();
}

// ===== EXPORTAR JSON =====
document.getElementById("exportBtn").addEventListener("click", () => {
  const dataStr = JSON.stringify(catalogo, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "catalogo_actualizado.json";
  link.click();
>>>>>>> 92b92e7399abceb966611c0de5e5bc22de719de3
});
