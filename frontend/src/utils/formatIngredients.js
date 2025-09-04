const formatIngredients = (lista) => {
    /* return lista.join(", "); */
    return lista.map((ing, index) => (<li key={index}>{ing}</li>))
        
    
}

export default formatIngredients