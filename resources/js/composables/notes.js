import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export default function useNotes(){
    const notes = ref([]);
    const note = ref({
        id: '',
        title: '',
        note: '',
    })
    const router = useRouter();

    const getNotes = async ()=> {
        axios.get('/api/notes')
            .then(response => {
                notes.value = response.data.data;
            })
    }

    const getNote = async (id) => {
        axios.get('/api/notes/' + id)
            .then(response => {
                note.value = response.data.data;
            })
    }

    const storeNote = async (note) => {
        axios.post('/api/notes', note)
        .then(response => {
            // router.push({
            //     name: 'notes.index'
            // })
            //console.log(response.data.data.id)
            // lastNoteCreated.value = response.data.data;
            // console.log('notes.js')
        })
    }

    const deleteNote = async (id) => {
        axios.delete('api/notes/' + id)
            .then(response => {
                // router.push({
                //      name: 'notes.index'
                // })                
            })
    }
    
    return {
        notes,
        note,
        getNotes,
        storeNote,
        deleteNote,
        getNote
    }
}