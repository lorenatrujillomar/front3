import {useForm} from"react-hook-form";


const Formulario =() =>{
    const {register, formState:{errors}, handleSubmit} = useForm();
    const onSubmit = (datos) =>{
console.log(datos);
    }
    return <div>
        <h2>Registrate</h2>
    
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre:</label>
                <input type="text" {...register( 'nombre',
                    {required: true,
                    minLength: 3}
                )}/>
                {errors.nombre?.type==='required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type==='required' && <p>El campo nombre debe tener más de 3 caracteres</p>}
            </div>
            <div>
                <label>Direccion:</label>
                <input type="text" {...register( 'direccion',
                    {required: true,

                    }

                )} />
            </div>
            <div>
                <label>Pais</label>
                <input type="text" {...register( 'pais')} />
            </div>
            <input type="submit" value="Enviar" />

        </form>
    </div>
}

export default Formulario;