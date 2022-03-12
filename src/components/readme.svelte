<script>
  import { marked } from 'marked';
  import sanitizeHtml from 'sanitize-html';
  export let content;
</script>

<section class="text-center mt-10">{@html sanitizeHtml(marked.parse(content))}</section>

<style>
  h1 {
    font-weight: bold;
  }
</style>
