const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <lable>Task</lable>
                <input type='text' placeholder='Add Task...' />
            </div>
            <div className='form-control'>
                <lable>Day & Time</lable>
                <input type='text' placeholder='Add Day...' />
            </div>
            <div className='form-control'>
                <lable>Set Reminder</lable>
                <input type='checkbox' />
            </div>
        </form>
    )
}

export default AddTask
