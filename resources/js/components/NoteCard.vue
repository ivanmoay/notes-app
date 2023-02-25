<template>
    <div class="card shadow-lg hover:scale-105 transition ease-out duration-200 h-36 bg-yellow-600 rounded m-2 p-2">
        <div>
            <h1 class="text-2xl font-semibold">{{ note.title }}</h1>
            <div>
                <p>
                    {{ snippet }}
                </p>                            
            </div>
            <div class="text-right">
                X
            </div>
        </div>                
    </div>
</template>

<script>
import { computed } from 'vue'

export default{
    props: ['note'],
    setup(props){
        const snippet = computed(()=>{
            return props.note.note.substring(0, 100) + '...'
        })

        return {snippet}
    }
}
</script>