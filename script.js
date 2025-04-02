const btn = document.getElementById('fetchBtn');
const statusContainer = document.getElementById('status');
const resultContainer = document.getElementById('result');

btn.addEventListener('click', () => 
{
    statusContainer.textContent = 'Завантаження...';
    resultContainer.textContent = '';
    btn.disabled = true;

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => 
        {
            if (!response.ok) 
                throw new Error('Помилка з’єднання');
            
            return response.json();
        })
        .then(data => 
        {
            if (!data || !data.title) 
                throw new Error('Невірний формат даних');

            resultContainer.textContent = data.title;
            statusContainer.textContent = 'Дані отримано успішно';
        })
        .catch(error => 
        {
            if (error.message === 'Невірний формат даних') 
                statusContainer.textContent = 'Невірний формат даних';
             
            else 
                statusContainer.textContent = 'Помилка з’єднання';
        })
        .finally(() => 
        {
            btn.disabled = false;
        });
});
