<script>
    import Header from '../components/header.svelte';
    import infos from '../../static/data/info.json';
    import "../app.css";
</script>

<Header title={infos.name} job={infos.job}/>
