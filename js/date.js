function displayDate() {
            var today = new Date();
            var day = today.getDate();
            var month = today.toLocaleString('default', { month: 'long' });
            var year = today.getFullYear();
            var formattedDate = day + ', ' + month + ', ' + year;

            document.getElementById('date').textContent = formattedDate;
}