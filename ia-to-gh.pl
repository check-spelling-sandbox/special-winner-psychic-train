#!/usr/bin/env perl
my $file;
my $depth;
my $up;
while (<>) {
  if ($file ne $ARGV) {
    $depth = $file = $ARGV;
    $depth = ($depth =~ s!/!!g);
    $up = "../" x $depth;
  }
  if ($athena) {
    $athena = 0 if /End Wayback Rewrite JS Include/;
    next;
  }
  if (m<includes/athena>) {
    $athena = 1;
    next;
  }
  if ($toolbar) {
    $toolbar=0 if /END WAYBACK TOOLBAR/;
    next; }
  if (/BEGIN WAYBACK TOOLBAR/) {
    $toolbar=1;
    next;
  }
  if ($playback) {
    if (m{^(?:-->|\*/)}) {
      $playback = 0;
      print;
    }
    next;
  }
  if (/^playback timings/) {
    $playback = 1;
    next;
  }
  if ($googleAnalytics) {
    if (m!</script>!) {
      $googleAnalytics = 0;
      print;
    }
    next;
  }
  if (/GoogleAnalyticsObject/) {
    $googleAnalytics = 1;
    next;
  }
  if ($googleTagManagerNoScript) {
    $googleTagManagerNoScript = 0 if (/\QEnd Google Tag Manager (noscript)\E/);
    next;
  }
  if (/\QGoogle Tag Manager (noscript)\E/) {
    $googleTagManagerNoScript = 1;
    next;
  }
  next if m<www.googletagmanager.com>;
  if ($mixPanel) {
    $mixPanel = 0 if m{</script>};
    next;
  }
  if (/mixpanel/) {
    $mixPanel = 1;
    next;
  }
  s{/web/\d+[cj]s_/https?:\Q//neo4j.com/docs/operations-manual/3.4/\E}{/}g;
  s{(?:https:|)\Q//web.archive.org/web/\E\d+(?:(?:[cj]s|im)_|)/(https?://(?!neo))}{$1}g;
  next if m<munchkin.marketo.net>;
  s<Munchkin.init\(.*?\)><>;
  s</web/\d+/\Qhttp://neo4j.com/docs/operations-manual/3.4/\E></>g;
  s<\Qhttps://web.archive.org\E/web/\E\d+(?:[cj]s|im)_/\Qhttps://neo4j.com\E/(?=wp-content)><$up>g;
  s</web/\E\d+(?:[cj]s|im)_/\Qhttps://neo4j.com\E/(?=docs/assets|wp-content/themes)><$up>g;
  s<(?:https://web.archive.org|)/web/\d+(?:im_|)/https://(?:dist\.|)neo4j.com/></>g;
  s</web/\d+/\Qhttps://neo4j.com/docs/operations-manual/3.4/\E></>g;
  s</docs/operations-manual/3.4/><$up>g;
  s<(["'])/(?=wp-content/)><$1$up>g;
  s<((?:href|src)=")/><$1$up>g;
  s<http(?=://(?:\Qajax.googleapis.com\E|\Qcdnjs.cloudflare.com\E|\Qfonts.gstatic.com\E|\Qfonts.googleapis.com\E|\Qmaxcdn.bootstrapcdn.com\E|\Qs3-eu-west-1.amazonaws.com\E))><https>g;
  print;
}
