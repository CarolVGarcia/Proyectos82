document.addEventListener('DOMContentLoaded', () => {
   
    const breedsSelect = document.getElementById('breeds');
    const getRandomDogBtn = document.getElementById('getRandomDogBtn');
    const dogImageContainer = document.getElementById('dogImageContainer');
  
    
    const breedsListUrl = 'https://dog.ceo/api/breeds/list';
  
    
    const randomImageUrl = 'https://dog.ceo/api/breed/';
  

    async function getBreedsList() {
      try {
        const response = await axios.get(breedsListUrl);
        const breeds = response.data.message;
       
        breeds.forEach(breed => {
          const option = document.createElement('option');
          option.text = breed;
          breedsSelect.add(option);
        });
      } catch (error) {
        console.error('Error al obtener la lista de razas de perros:', error);
      }
    }
  
   
    async function getRandomDogImage(breed) {
      const url = `${randomImageUrl}${breed}/images/random`;
      try {
        const response = await axios.get(url);
        const imageUrl = response.data.message;
      
        dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Imagen de perro">`;
      } catch (error) {
        console.error('Error al obtener la imagen aleatoria:', error);
        dogImageContainer.innerHTML = 'No se pudo cargar la imagen.';
      }
    }
  
    getRandomDogBtn.addEventListener('click', () => {
      const selectedBreed = breedsSelect.value;
      if (selectedBreed) {
        getRandomDogImage(selectedBreed);
      } else {
        alert('Selecciona una raza de perro primero.');
      }
    });

    getBreedsList();
  });
  