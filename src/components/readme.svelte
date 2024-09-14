<script>
	import { marked } from 'marked';
	import sanitizeHtml from 'sanitize-html';
	export let content;
</script>

{#if content}
	<section class="text-center mt-10 mb-5 readme">
		{@html sanitizeHtml(marked.parse(content))}
	</section>
{/if}
