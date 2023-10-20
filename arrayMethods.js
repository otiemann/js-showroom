<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let filme = ["Film1", "Film2", "Film3", "Film4", "Film5"];
        filme.pop();
        console.table(filme);
        filme.push('Film6');
        console.table(filme);
        filme.shift();
        console.table(filme);
        for (let i = 0; i < filme.length; i++) {
            console.log(filme[i]);
        }
        localStorage.setItem('filme', JSON.stringify(filme));
        let filme2 = JSON.parse(localStorage.getItem('filme'));
        console.table(filme2);
    </script>
</body>
</html>