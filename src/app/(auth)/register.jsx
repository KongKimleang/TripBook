import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import AppText from "../../components/ui/AppText";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Screen from "../../components/ui/Screen";
import { useAuth } from "../../context/AuthContext";
import { spacing } from "../../theme/tokens";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  async function onSubmit() {
    const e = {};
    if (!name.trim()) e.name = "Enter your name.";
    if (!EMAIL_RE.test(email.trim())) e.email = "Enter a valid email.";
    if (password.length < 8) e.password = "Use at least 8 characters.";
    setErrors(e);
    if (Object.keys(e).length) return;

    setBusy(true);
    try {
      await register(name.trim(), email.trim(), password);
    } catch (err) {
      setErrors({ form: err.message });
      setBusy(false);
    }
  }

  return (
    <Screen scroll safeTop>
      <View style={{ marginTop: spacing.xl, marginBottom: spacing.lg }}>
        <AppText variant="title">Create account</AppText>
        <AppText color="muted">It takes less than a minute.</AppText>
      </View>

      <Input label="Name" value={name} onChangeText={setName} error={errors.name} placeholder="Your name" />
      <Input label="Email" value={email} onChangeText={setEmail} error={errors.email}
        autoCapitalize="none" keyboardType="email-address" placeholder="you@example.com" />
      <Input label="Password" value={password} onChangeText={setPassword} error={errors.password}
        secureTextEntry placeholder="At least 8 characters" />

      {errors.form ? <AppText color="danger" style={{ marginBottom: spacing.md }}>{errors.form}</AppText> : null}

      <Button title="Sign up" onPress={onSubmit} loading={busy} />

      <View style={{ marginTop: spacing.lg, alignItems: "center" }}>
        <Link href="/login"><AppText color="primary">I already have an account</AppText></Link>
      </View>
    </Screen>
  );
}