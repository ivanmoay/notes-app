<template>
    <div class="grid grid-cols-2 md:mx-36"> <!--content wrapper-->
        <div class="col-span-2 my-8">
            <h1 class="text-4xl font-semibold">Notes App</h1>
        </div>

        <main class="col-span-2 grid grid-cols-4">
            
            <div class="col-span-1 h-screen overflow-y-scroll">                
                
                <form @submit.prevent="handleNewNote(newNote)">
                    <div class="card shadow-lg hover:scale-105 transition ease-out duration-200 bg-yellow-600 rounded m-2 p-2">
                        <div>
                            <input type="text" name="" v-model="newNote.title" id="" placeholder="Title" class="w-full text-lg border-b-2 mt-2 pl-1">
                        </div>       
                        <div>
                            <button type="submit" class="bg-slate-200 w-full h-8 mt-2 hover:border-b-2 border-black">Add Note</button>
                        </div>                
                    </div>
                </form>                

                <div v-for="note in notes">
                    <NoteCard :note="note" @update="onNoteDelete" @click="onNoteSelect"/>
                </div>

            </div>

            <div class="col-span-3">
                <div>
                    <input type="text" name="title" v-model="clickedNote.title" class="text-4xl w-full border-b-2 pl-2">
                </div>
                <div>
                    <textarea name="note" id="" ref="input" v-model="clickedNote.note" cols="160" rows="20" class="w-full pl-2" @input="handleNoteChange(clickedNote.note)">{{ clickedNote.note }}</textarea>
                </div>      
                <div>
                    <input type="hidden" name="id" v-model="clickedNote.id">
                </div>   
                <div class="flex justify-between">
                    <div class="">
                        {{ maxCharacters - characterCounter }} characters left
                    </div>
                    <div class="mx-2">
                        <button class="mx-2 bg-slate-200 h-8 mt-2 px-2 hover:border-b-2 border-black">Update</button>
                    </div>               
                </div>       
            </div>

        </main>
    </div>
</template>

<script>
import { onMounted, ref, reactive, watchEffect } from 'vue'
import NoteCard from './components/NoteCard.vue'
import useNotes from './composables/notes'

export default {
  name: 'Home',
  components: {
    NoteCard
  },
  setup(){
    const {notes, getNotes, storeNote, deleteNote, note: noteData, getNote} = useNotes()

    const newNote = reactive({
        title: '',
        note: ''
    })

    let clickedNote = reactive({
        id: '',
        title: '',
        note: ''
    })

    onMounted(getNotes);   

    watchEffect(() => {
        clickedNote.id = noteData.value.id
        clickedNote.title = noteData.value.title
        clickedNote.note = noteData.value.note
    })

    // const title = ref('')
    // const note = ref('')
    const maxCharacters = 255
    let characterCounter = ref(0)

    const input = ref(null)

    const clearNote = ()=>{
        newNote.title = ''
    }

    const handleNewNote = (newNote)=>{        
        storeNote(newNote)
        clearNote()
        //input.value.focus()
        getNotes()
    }

    const handleNoteChange = (str)=>{
        characterCounter.value = str.length
        if(characterCounter.value > maxCharacters){
            str = str.slice(0, -1)
            characterCounter.value = str.length
        }
    }

    const onNoteDelete = (id)=>{
        if(id == clickedNote.id){
            clickedNote.id = ''
            clickedNote.title = ''
            clickedNote.note = ''
        }
        getNotes()
    }

    const onNoteSelect = (id)=>{
        getNote(id)
        timer.start()
    }

    return {
        handleNewNote,
        handleNoteChange,
        // title,
        // note,
        characterCounter,
        maxCharacters,
        input,
        notes,
        newNote,
        storeNote,
        deleteNote,
        onNoteDelete,
        onNoteSelect,
        clickedNote
    }
  }
}
</script>

<style>

</style>