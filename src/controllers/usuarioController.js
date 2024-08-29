import pool from "../db.js";

export const getUsuarios = async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query(`SELECT * FROM USUARIOS WHERE id_usuario = $1`,
            [usuarioId]
        );

        //const jsonData = result.rows.map(row => ({
        //    id: row.id,
        //    name: row.name
        //}));
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
    res.status(500).json({ message: 'Erro ao buscar pessoas' });
    } 
}

export const deleteUsuarios = async (req, res) => {
    try {
        const usuario = req.params.id;
        const client = await pool.connect();
        const result = await client.query(`DELETE FROM USUARIOS WHERE id_usuario = $1`,
            [usuario]
        );

        //const jsonData = result.rows.map(row => ({
        //    id: row.id,   
        //    name: row.name
        //}));
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
    res.status(500).json({ message: 'Erro ao buscar pessoas' });
    } 
}

export const updateUsuarios = async (req, res) => {
    try {
        const usuario = req.params.id;
        const nome = req.body.nome;
        const client = await pool.connect();
        const result = await client.query(`UPDATE USUARIOS SET nome = $2 WHERE id_usuario = $1 RETURNING *`,
            [
                usuario,
                nome
            ]
        );

        //const jsonData = result.rows.map(row => ({
        //    id: row.id,   
        //    name: row.name
        //}));
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
    res.status(500).json({ message: 'Erro ao buscar pessoas' });
    } 
}

export const postUsuarios = async (req, res) => {
    try {
        const usuario = req.body;
        const client = await pool.connect();
        const result = await client.query(
            `INSERT INTO USUARIOS(id_usuario, nome, email, password)
            VALUES ($1,$2,$3,$4) RETURNING *`,
            [
                usuario.id, 
                usuario.nome, 
                usuario.email, 
                usuario.password  
            ]);
            res.status(201).send('Usuario adicionado com sucesso')
    } catch (ex) {
        
    }
}