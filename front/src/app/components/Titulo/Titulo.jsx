export default function Titulo({ titulo, nivel }) {

    const Tag = (nivel >= 1 && nivel <= 6) ? `h${nivel}` : 'h3';
    return (
        <>
            <Tag>
                {titulo}
            </Tag>
            <hr />
        </>

    )

}