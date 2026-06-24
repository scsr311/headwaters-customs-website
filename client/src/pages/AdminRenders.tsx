import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Loader2, Lock, ImageOff } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminRenders() {
  const [password, setPassword] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data: renders, isLoading, error, refetch } = trpc.dreamBuild.adminGetAll.useQuery(
    { adminPassword: submittedPassword },
    { enabled: isAuthenticated }
  );

  const toggleMutation = trpc.dreamBuild.adminTogglePublic.useMutation({
    onSuccess: () => {
      refetch();
      toast.success("Visibility updated");
    },
    onError: () => toast.error("Failed to update visibility"),
  });

  const handleLogin = () => {
    setSubmittedPassword(password);
    setIsAuthenticated(true);
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm p-8 space-y-6 bg-card border-border">
          <div className="text-center space-y-2">
            <Lock className="w-12 h-12 text-accent mx-auto" />
            <h1 className="text-2xl font-bold">Admin Access</h1>
            <p className="text-muted-foreground text-sm">Headwaters Customs — Render Viewer</p>
          </div>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="bg-background"
            />
            <Button
              onClick={handleLogin}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Access Render Viewer
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm p-8 text-center space-y-4 bg-card border-border">
          <Lock className="w-12 h-12 text-destructive mx-auto" />
          <h2 className="text-xl font-bold text-destructive">Access Denied</h2>
          <p className="text-muted-foreground text-sm">Incorrect password.</p>
          <Button variant="outline" onClick={() => { setIsAuthenticated(false); setPassword(""); }}>
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Dream Build Render Viewer</h1>
            <p className="text-sm text-muted-foreground">
              {isLoading ? "Loading..." : `${renders?.length || 0} total renders`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-accent border-accent/30">
              Admin
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setIsAuthenticated(false); setPassword(""); setSubmittedPassword(""); }}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
            <span className="ml-3 text-muted-foreground text-lg">Loading all renders...</span>
          </div>
        ) : !renders || renders.length === 0 ? (
          <div className="text-center py-32 space-y-4">
            <ImageOff className="w-16 h-16 text-muted-foreground mx-auto" />
            <h2 className="text-xl font-bold text-muted-foreground">No renders yet</h2>
            <p className="text-muted-foreground">
              Renders will appear here once users start generating dream builds.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {renders.map((render) => (
              <Card
                key={render.id}
                className={`overflow-hidden bg-card border-border transition-all ${
                  !render.isPublic ? "opacity-60 border-dashed" : ""
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  {render.generatedImages[0] ? (
                    <img
                      src={render.generatedImages[0]}
                      alt={render.prompt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageOff className="w-10 h-10 text-muted-foreground" />
                    </div>
                  )}
                  {/* Status badge */}
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant={render.isPublic ? "default" : "secondary"}
                      className={render.isPublic ? "bg-green-600 text-white" : "bg-zinc-700 text-zinc-300"}
                    >
                      {render.isPublic ? "Public" : "Hidden"}
                    </Badge>
                  </div>
                  {/* ID badge */}
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-black/60 text-white border-white/20 text-xs">
                      #{render.id}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {/* Prompt */}
                  <p className="text-sm text-foreground line-clamp-3 leading-relaxed">
                    {render.prompt}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div><span className="font-medium">Date:</span> {formatDate(render.createdAt)}</div>
                    {render.userEmail && (
                      <div><span className="font-medium">Email:</span> {render.userEmail}</div>
                    )}
                    {render.ipAddress && (
                      <div><span className="font-medium">IP:</span> {render.ipAddress}</div>
                    )}
                    <div><span className="font-medium">Session:</span> {render.sessionId.slice(0, 20)}...</div>
                  </div>

                  {/* Toggle visibility */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled={toggleMutation.isPending}
                    onClick={() =>
                      toggleMutation.mutate({
                        adminPassword: submittedPassword,
                        id: render.id,
                        isPublic: !render.isPublic,
                      })
                    }
                  >
                    {render.isPublic ? (
                      <>
                        <EyeOff className="w-4 h-4 mr-2" />
                        Hide from Gallery
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Show in Gallery
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
