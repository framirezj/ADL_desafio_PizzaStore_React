
const formatPrice = (cantidad) => {
    return cantidad.toLocaleString("es-ES", { useGrouping: true })
}

export default formatPrice