<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    .view{
        border: 1px solid black;
        min-height: 200px;
        width: 80%;
        margin:auto;
        padding: 25px;
    }
    .button-area{
        text-align: center;
        margin: 20px 0;
    }
    .error{
        color: red;
        text-align: center;
    }
    table tr td, table tr th{
        border: 1px solid black;
        padding: 5px;
        text-align: center;
    }
    table{
        border-collapse: collapse;
        margin: auto;
    }
    form{
        text-align:center;
        margin:40px 0;
    }
    .overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        }
    </style>
</head>
<body>
    <form action="" method="GET">
        <input type="text" name="nom" id="city" placeholder="Ville recherché">
        <input type="submit">
    </form>
    <div class="view">

    </div>

    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>