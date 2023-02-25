import axios from "axios";
import { ref } from "vue";

export default function useNotes(){
    const notes = ref([]);

    const getNotes = async ()=> {
        axios.get('/api/notes')
            .then(response => {
                notes.value = response.data;
            })
    }
    
    return {notes,getNotes}
}