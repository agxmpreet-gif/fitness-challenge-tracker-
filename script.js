<input type="text" id="repo-url" value="https://github.com/agxmpreet-gif/fitness-challenge-tracker-" readonly>
<button type="button" id="copy-btn">Copy Link</button>
<p id="copy-status"></p>

<script>
  const copyBtn = document.getElementById("copy-btn");
  const repoInput = document.getElementById("repo-url");
  const statusText = document.getElementById("copy-status");

  copyBtn.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(repoInput.value);
      statusText.textContent = "Copied to clipboard!";
    } catch (err) {
      repoInput.select();
      document.execCommand("copy");
      statusText.textContent = "Copied!";
    }
  });
</script>