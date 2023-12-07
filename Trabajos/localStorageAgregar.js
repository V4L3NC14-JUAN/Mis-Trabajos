function agregarProducto(){
    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos.push({producto,cantidad});

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    
}