export default {
    name:'blog',
    type:'document',
    title:'My blogs',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Blog title'
        },
        {
            name:'slug',
            type:'slug',
            title:'Blog slug',
            options:{
                source:"title"
            }
        },
        {
            name:'image',
            type:'image',
            title:'Title image'
        },
        {
            name:'summary',
            type:'text',
            title:'Brief summary'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[{type:'block'}]
        }
            ]

}